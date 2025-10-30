<template>
    <el-container class="h-full w-full">
        <el-main class="w-full">
            <ul class="flex flex-col w-full">
                <li v-for="button in buttons">
                    <el-tooltip
                        class="box-item bg-border"
                        effect="light"
                        :content="button.text"
                        placement="right-start"
                    >
                        <el-button
                            round
                            :icon="button.icon"
                            @click="button.click"
                            :style="{
                                boxShadow: `var(--el-box-shadow)`,
                                'border-radius': `8px`,
                            }"
                            class="m-1 w-full"
                            >{{
                                sidebarStore.isExpanded ? button.text : ""
                            }}</el-button
                        >
                    </el-tooltip>
                </li>
            </ul>
        </el-main>
        <el-footer class="flex! w-full justify-center">
            <el-button
                type="info"
                round
                class="m-1"
                @click="router.push('/login')"
            >
                个人
            </el-button>
        </el-footer>
    </el-container>
</template>

<script setup>
import { Comment, Menu, Switch } from "@element-plus/icons-vue";
import { useSidebarStore } from "@/stores/sidebar";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const sidebarStore = useSidebarStore();
const borderText = ref("侧边栏关闭");

watch(sidebarStore, () => {
    if (sidebarStore.isExpanded) {
        borderText.value = "侧边栏关闭";
    } else {
        borderText.value = "侧边栏打开";
    }
});

const buttons = ref([
    {
        name: "边框控制",
        text: borderText,
        icon: Switch,
        click: sidebarStore.toggleSidebar,
    },
    {
        name: "对话控制",
        text: "新对话",
        icon: Comment,
        click: () => {
            router.push("/");
        },
    },
    { name: "模型控制", text: "模型选择", icon: Menu },
]);
</script>

<style scoped></style>
