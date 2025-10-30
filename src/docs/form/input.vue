<template>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    <el-input
        v-model="textarea1"
        style="width: 240px"
        autosize
        type="textarea"
        placeholder="Please input"
    />
    <div style="margin: 20px 0" />
    <el-input
        v-model="textarea2"
        style="width: 240px"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
    />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const input = ref("");
const textarea1 = ref("");
const textarea2 = ref("");
</script>
