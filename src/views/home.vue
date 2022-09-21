<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">

</script>
        
<style scoped>
.home>.el-container {
    height: 100vh;
}
</style>
    