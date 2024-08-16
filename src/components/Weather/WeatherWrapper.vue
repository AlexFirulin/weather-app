<script setup>
import { useWeatherStore } from '@/stores/weather'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import WarningModal from '../Modals/WarningModal.vue'
const router = useRouter()
const route = useRoute()
const store = useWeatherStore()
const warningModal = ref(null)

const handleSavePlace = () => {
  if (store.savedPlacesWeather.length > 5) {
    warningModal.value.openModal()
  } else store.savePlaceWeather()
}

const openSavedPlace = (item) => {
  router.push(`/weather/${item.coord.lat}/${item.coord.lon}/${store.apiKey}`)
}
</script>
<template>
  <div class="weather-card">
    <div class="tabs-wrapper">
      <button v-if="!route.params.lat" class="tab-button" @click="handleSavePlace">+</button>
      <div class="tabs">
        <button
          v-for="item in store.savedPlacesWeather"
          :key="item.id"
          @click="openSavedPlace(item)"
          class="added-tabs"
        >
          {{ item.name }}
        </button>
      </div>
      <WarningModal ref="warningModal" />
    </div>
    <slot />
  </div>
</template>
<style scoped>
.saved-city {
  border: 1px solid #000;
  border-radius: 8px 8px 0px 0px;
  padding: 10px;
}
.weather-card {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex: 1;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 10px;
}
.tab-button {
  background-color: #f0f0f0;
  border: 2px solid #3498db;
  border-radius: 25px;
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 16px;
  color: #3498db;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  font-size: 18px;
}

.tabs-wrapper {
  display: flex;
  gap: 5px;
  align-items: center;
}
.added-tabs {
  padding: 10px 20px;
  background-color: #f8f8f8;
  border: 0;
  margin: 2px;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
}
</style>
