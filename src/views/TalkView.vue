<template>
    <el-container class="h-full w-full">
        <el-main class="flex! flex-col w-full items-center justify-center">
            <ul v-for="item in talkArrs" class="flex! w-full">
                <talkBorder
                    :class="[
                        'flex!',
                        item.isUser ? 'justify-end' : 'justify-start',
                    ]"
                >
                    {{ item.text }}
                </talkBorder>
            </ul>
        </el-main>
        <el-footer class="flex! w-full items-center justify-center h-40!">
            <el-input
                v-model="userTalk.text"
                :autosize="{ minRows: 1, maxRows: 4 }"
                placeholder="请随意输入吧"
                type="textarea"
                class="w-full p-2 m-1"
            />
            <el-button :icon="Finished" class="p-2 m-1"> </el-button>
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { Finished } from "@element-plus/icons-vue";
import { useUserTalk } from "@/stores/user";
import { watch, ref } from "vue";
import talkBorder from "@/components/talkBorder.vue";

const userTalk = useUserTalk();

const talkArrs = ref([
    { text: "text1", isUser: true },
    { text: "text2", isUser: false },
    {
        text: "text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2text2",
        isUser: false,
    },
]);
</script>

<style scoped>
#sidebarBoard {
    border: 1px solid;
}
</style>
