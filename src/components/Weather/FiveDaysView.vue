<script setup>
import WeatherChart from './WeatherChart.vue'
import { useWeatherStore } from '@/stores/weather'

const store = useWeatherStore()
</script>
<template>
  <div class="container">
    <div class="card-container">
      <div class="card" v-for="weather in store.placeWeatherForFiveDays.list" :key="weather.dt">
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
  </div>
  <div class="weather-chart">
    <WeatherChart :chart-label="store.totalDates" :chart-data="store.temperaturesForFiveDays" />
  </div>
</template>

<style scoped>
.container {
  max-width: 90vw;
  overflow-x: auto;
  white-space: nowrap;
}

.card-container {
  display: flex;
  gap: 16px;
}

.card {
  flex: 0 0 auto;
  width: 250px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: rgb(14 116 144);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.weather-chart {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
