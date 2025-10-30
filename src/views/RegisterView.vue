<template>
    <el-container
        class="flex items-center justify-center min-h-screen bg-gray-100"
    >
        <el-card class="w-[400px] shadow-lg rounded-2xl">
            <h2 class="text-2xl font-bold text-center mb-6">注册账号</h2>

            <el-form :model="form" label-position="top" class="space-y-3">
                <el-form-item label="用户名">
                    <el-input
                        v-model="form.username"
                        placeholder="请输入用户名"
                    />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input
                        v-model="form.password"
                        placeholder="请输入密码"
                        show-password
                    />
                </el-form-item>
                <el-button type="primary" class="w-full">注册</el-button>
                <div class="text-center text-sm text-gray-500 mt-3">
                    已有账号？
                    <router-link
                        to="/login"
                        class="text-blue-500 hover:underline"
                    >
                        去登录
                    </router-link>
                </div>
            </el-form>
        </el-card>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
    username: "",
    password: "",
});
</script>
