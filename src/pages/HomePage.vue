<script setup>
import SearchInput from '@/components/Searching/SearchInput.vue'
import LocalWeather from '@/components/Weather/LocalWeather.vue'
import { useWeatherStore } from '@/stores/weather'
import { useRoute } from 'vue-router';
const route = useRoute()
const store = useWeatherStore()
</script>
<template>
  <main class="main">
    <div class="weather-container">
      <SearchInput />
    </div>
    <div v-if="!route.params.lat">
      <LocalWeather v-if="store.placeWeatherForOneDay" />
    </div>
    <div v-else>
      <router-view />
    </div>
  </main>
</template>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.weather-container {
  padding-top: 16px;
  margin-bottom: 16px;
  position: relative;
}
</style>
