<template>
    <el-container>
        <el-card shadow="always" :class="['inline-block max-w-[70%] m-3']">
            <p
                class="text-lg font-bold text-text wrap-break-word whitespace-normal"
            >
                <slot>...</slot>
            </p>
        </el-card>
    </el-container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
