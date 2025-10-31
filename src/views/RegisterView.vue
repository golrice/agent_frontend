<template>
    <el-container
        class="flex items-center justify-center min-h-screen bg-gray-100"
    >
        <el-card class="w-[400px] shadow-lg rounded-2xl">
            <h2 class="text-2xl font-bold text-center mb-6">注册账号</h2>

            <el-form
                :model="form"
                :rules="rules"
                ref="formRef"
                label-position="top"
                class="space-y-3"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input
                        v-model="form.username"
                        placeholder="请输入用户名"
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
                    <el-input v-model="form.email" placeholder="请输入邮箱" />
                </el-form-item>

                <el-form-item>
                    <el-button
                        type="primary"
                        class="w-full"
                        :loading="loading"
                        @click="handleSignup"
                    >
                        注册
                    </el-button>
                </el-form-item>

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
import { signupApi } from "@/api/auth";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
    username: "",
    password: "",
    email: "",
});

const rules = {
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
};

const formRef = ref();
const loading = ref(false);

const handleSignup = async () => {
    await formRef.value.validate(async (valid: boolean) => {
        if (!valid) return;
        loading.value = true;

        try {
            await signupApi(form.value);

            ElMessage.success("注册成功");
            router.push("/");
        } catch (e: any) {
            ElMessage.error(e?.message || "注册失败");
        } finally {
            loading.value = false;
        }
    });
};
</script>
