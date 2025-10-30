<template>
    <el-container
        class="flex items-center justify-center min-h-screen bg-gray-100"
    >
        <el-card class="w-[400px] shadow-lg rounded-2xl">
            <h2 class="text-2xl font-bold text-center mb-6">用户登录</h2>

            <el-form
                :model="form"
                :rules="rules"
                ref="formRef"
                label-position="top"
                class="space-y-3"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input
                        v-model="form.full_name"
                        placeholder="请输入用户名"
                        clearable
                    />
                </el-form-item>

                <el-form-item label="密码" prop="password">
                    <el-input
                        v-model="form.password"
                        placeholder="请输入密码"
                        show-password
                    />
                </el-form-item>

                <el-form-item label="邮箱" prop="email">
                    <el-input
                        v-model="form.email"
                        placeholder="请输入邮箱"
                        show-password
                    />
                </el-form-item>

                <el-form-item>
                    <el-button
                        type="primary"
                        class="w-full"
                        :loading="loading"
                        @click="handleLogin"
                    >
                        登录
                    </el-button>
                </el-form-item>

                <div class="text-center text-sm text-gray-500">
                    还没有账号？
                    <router-link
                        to="/register"
                        class="text-blue-500 hover:underline"
                    >
                        去注册
                    </router-link>
                </div>
            </el-form>
        </el-card>
    </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import { loginApi } from "@/api/auth";

const router = useRouter();
const userStore = useUserStore();

const formRef = ref();
const loading = ref(false);

const form = ref({
    full_name: "",
    password: "",
    email: "",
});

const rules = {
    full_name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
};

const handleLogin = async () => {
    await formRef.value.validate(async (valid: boolean) => {
        if (!valid) return;
        loading.value = true;

        try {
            const res = await loginApi(form.value);

            userStore.setUser(res.data);

            ElMessage.success("登录成功");
            router.push("/");
        } catch (e: any) {
            ElMessage.error(e?.message || "登录失败");
        } finally {
            loading.value = false;
        }
    });
};
</script>
