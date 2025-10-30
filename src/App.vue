<template>
    <el-container class="h-screen">
        <el-aside id="sidebarBoard" class="h-full border-border!" :width="1">
            <Sidebar />
        </el-aside>
        <el-container>
            <router-view />
        </el-container>
    </el-container>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import TalkView from "@/views/TalkView.vue";
</script>

<style scoped>
#sidebarBoard {
    border: 1px solid;
}
</style>
