<script setup>
import NavBar from '@/components/Navigation/NavBar.vue'
</script>
<template>
  <div class="app-wrapper">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>
<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(14 116 144);
  padding: 50px;
  box-sizing: border-box;
}
</style>
