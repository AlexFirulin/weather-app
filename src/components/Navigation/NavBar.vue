<script setup>
import LangButton from '../Buttons/LangButton.vue';
</script>

<template>
  <header class="app-header">
    <nav class="navigation">
      <router-link :to="{ name: 'home' }">
        <div class="nav-items">
          <i class="fa-solid fa-sun"></i>
          <p>{{  $t('local.weather') }}</p>
        </div>
      </router-link>
      <LangButton />
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  background-color: rgb(14 116 144);
  top: 0;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.nav-items {
  display: flex;
  align-items: start;
  gap: 10px;
  flex: 1;
  font-size: 24px;
  color: #fff;
}
</style>
