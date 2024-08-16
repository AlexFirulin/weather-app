<script setup>
import { useWeatherStore } from '@/stores/weather'
import WeatherChart from './WeatherChart.vue'

const store = useWeatherStore()
</script>
<template>
  <div class="weather-card-wrapper">
    <div v-for="weather in store.placeWeatherForOneDay" :key="weather.dt" class="weather-card">
      <p>{{ weather.dt_txt }}</p>
      <p>{{ store.placeData.dt_txt }}</p>
      <p class="max-temp">{{ Math.floor(weather.main.temp_max) }} &deg;</p>
      <p> {{ $t('feels.like') }} {{ Math.floor(weather.main.feels_like) }}&deg;</p>
      <div v-for="weatherIcon in weather.weather" :key="weatherIcon.id" class="icons">
        <img :src="store.getIconUrl(weatherIcon.icon)" class="icon" />
        <p>{{ weatherIcon.main }}</p>
        <p>{{ weatherIcon.description }}</p>
      </div>
    </div>
  </div>
  <div class="weather-chart">
    <WeatherChart :chart-label="store.dates" :chart-data="store.temperatures" />
  </div>
</template>
<style scoped>
.weather-card-wrapper {
  display: flex;
  gap: 10px 10px;
  flex-wrap: wrap;
}
.weather-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #5a8bd3;
  padding: 15px;
  border-radius: 8px;
}
.max-temp {
  font-size: 80px;
}
.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  height: 120px;
  width: 120px;
}
.weather-chart {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
