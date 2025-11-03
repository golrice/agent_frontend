<template>
    <el-container class="flex! h-full w-full flex-col">
        <el-header class="flex! justify-center items-center"
            >你正在与 {{ ai_type.type }} 聊天</el-header
        >
        <el-main
            class="flex! flex-col w-full grow overflow-auto"
            ref="chatContainer"
        >
            <el-scrollbar ref="scrollbarRef">
                <p
                    v-for="(item, index) in talkArrs"
                    :key="index"
                    class="flex! w-full"
                >
                    <talkBorder
                        :content="item.text"
                        :class="[
                            'flex!',
                            item.is_user ? 'justify-end' : 'justify-start',
                        ]"
                    />
                </p>
            </el-scrollbar>
        </el-main>
        <el-footer class="flex! w-full items-center justify-center h-40!">
            <el-input
                v-model="user_talk.text"
                :autosize="{ minRows: 1, maxRows: 4 }"
                placeholder="输入内容 Ctrl/Cmd+Enter 提交"
                type="textarea"
                class="w-full p-2 m-1"
                @keydown="handleKeydown"
            />
            <el-button :icon="Finished" class="p-2 m-1" @click="updateTalkArrs">
            </el-button>
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { Finished } from "@element-plus/icons-vue";
import { useUserTalk } from "@/stores/user";
import { ref } from "vue";
import talkBorder from "@/components/talkBorder.vue";
import type { Ref } from "vue";
import { useAIType } from "@/stores/ai";
import { onMounted } from "vue";
import { generateContentApi } from "@/api/ai";
import { nextTick } from "vue";
import type { ScrollbarInstance } from "element-plus/lib";
import { create_stream_channel } from "@/services/aiStream";

interface Props {
    session_id: string | null;
}

const props = defineProps<Props>();

const scrollbarRef = ref<ScrollbarInstance | null>(null);

const scrollToBottom = async () => {
    await nextTick();
    if (!scrollbarRef.value) {
        return;
    }

    const instance = scrollbarRef.value;
    const wrapEl = scrollbarRef.value.wrapRef as HTMLElement | null;

    if (wrapEl) {
        instance.setScrollTop(wrapEl.scrollHeight);
    }
};

const session_id = ref("");
const user_talk = useUserTalk();
const ai_type = useAIType();

interface talkItem {
    id: string;
    is_user: boolean;
    text: string;
}

const talkArrs: Ref<talkItem[]> = ref([]);

const updateTalkArrs = async () => {
    if (user_talk.isEmpty()) {
        return;
    }

    talkArrs.value.push({
        id: session_id.value,
        is_user: true,
        text: user_talk.text,
    });
    await scrollToBottom();

    const text = user_talk.text;
    user_talk.setText("");

    const stream = await create_stream_channel(session_id.value, {
        is_user: true,
        msg: text,
    });

    let ai_text = "";
    stream.onmessage = async (event) => {
        if (event.data == "[END]") {
            stream.close();
            return;
        }

        const data = JSON.parse(event.data);
        ai_text += data.content;

        const last_item = talkArrs.value[talkArrs.value.length - 1] as talkItem;
        if (last_item.is_user) {
            talkArrs.value.push({
                id: session_id.value,
                is_user: false,
                text: ai_text,
            });
        } else {
            last_item.text = ai_text;
        }
        await scrollToBottom();
    };
};

const handleKeydown = async (event: any) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        await updateTalkArrs();
    }
};

onMounted(async () => {
    if (props.session_id == null || props.session_id == "") {
        session_id.value = crypto.randomUUID();
    } else {
        session_id.value = props.session_id;
    }
});
</script>

<style scoped>
#sidebarBoard {
    border: 1px solid;
}
</style>
