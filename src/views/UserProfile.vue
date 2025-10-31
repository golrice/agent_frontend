<template>
    <el-card class="max-w-lg mx-auto mt-10 shadow-lg">
        <template #header>
            <div class="flex items-center justify-between">
                <span class="text-lg font-semibold">用户信息</span>
                <el-button type="primary" @click="refresh" :loading="loading"
                    >刷新</el-button
                >
                <el-button type="primary" @click="logout">退出</el-button>
            </div>
        </template>

        <el-skeleton :loading="loading" animated>
            <el-descriptions border column="1">
                <el-descriptions-item label="用户ID">{{
                    user.user?.id
                }}</el-descriptions-item>
                <el-descriptions-item label="邮箱">{{
                    user.user?.email
                }}</el-descriptions-item>
                <el-descriptions-item label="用户名">{{
                    user.user?.username || "未设置"
                }}</el-descriptions-item>
                <el-descriptions-item label="是否激活">
                    <el-tag :type="user.user?.is_active ? 'success' : 'info'">
                        {{ user.user?.is_active ? "是" : "否" }}
                    </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="是否管理员">
                    <el-tag
                        :type="user.user?.is_superuser ? 'danger' : 'default'"
                    >
                        {{ user.user?.is_superuser ? "是" : "否" }}
                    </el-tag>
                </el-descriptions-item>
            </el-descriptions>
        </el-skeleton>
    </el-card>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { fetchLatestUserApi } from "@/api/auth";
import { ref } from "vue";
import { token_name } from "@/constants/base";
import { useRouter } from "vue-router";

const router = useRouter();

const user = useUserStore();
const loading = ref(false);

const refresh = async () => {
    if (loading.value) {
        return;
    }
    loading.value = true;
    await fetchLatestUserApi();
    loading.value = false;
};

const logout = async () => {
    user.logout();
    localStorage.removeItem(token_name);

    router.push("/login");
};

onMounted(refresh);
</script>
