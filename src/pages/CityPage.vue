<script setup>
import LocalWeather from '@/components/Weather/LocalWeather.vue'
import DeleteTabModal from '@/components/Modals/DeleteTabModal.vue'
import { useWeatherStore } from '@/stores/weather'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const store = useWeatherStore()

const route = useRoute()

watch(
  () => route.params.lat,
  (newVal) => {
    store.getPlaceWeather(newVal, route.params.lon, route.params.key)
  },
  { immediate: true }
)

const deleteModalRef = ref()

const showModal = () => {
  deleteModalRef.value?.openModal()
}
</script>
<template>
  <div class="tab-actions">
    <router-link :to="{ name: 'home' }">
      <button class="action-button back-button">Go back</button>
    </router-link>
    <button class="action-button delete-button" @click="showModal">Delete tab</button>
  </div>
  <DeleteTabModal ref="deleteModalRef" />
  <div>
    <LocalWeather :key="route.params.lat" />
  </div>
</template>

<style scoped>
.tab-actions {
  display: flex;
  gap: 10px;
  margin: 20px;
}

.action-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  outline: none;
  border-radius: 5px;
}

.back-button {
  background-color: #f0f0f0;
  color: #333;
}

.back-button:hover {
  background-color: #e0e0e0;
}

.delete-button {
  background-color: #ff4d4d;
  color: #fff;
}

.delete-button:hover {
  background-color: #ff1a1a;
}

.action-button:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
}
</style>
