<script setup>
import { ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import AppLoader from '@/components/Loaders/AppLoader.vue'
const searchQuery = ref('')
const queryTimeout = ref(null)
const store = useWeatherStore()

const getSearchResults = () => {
  clearTimeout(queryTimeout.value)
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value.length !== '') {
      await store.getPlaceData(searchQuery.value)
    } else {
      store.placeData = null
    }
  }, 300)
}
</script>
<template>
      <AppLoader v-if="store.loading"/>
  <input
    v-model="searchQuery"
    type="text"
    :placeholder="$t('search.city')"
    class="search-input"
    @input="getSearchResults"
  />
  <ul v-if="store.placeData || store.searchError" class="result-list">
    <li @click="store.getPlaceWeather(store.placeData.coord.lat, store.placeData.coord.lon, store.apiKey)">{{ store.placeData.name }}</li>
  </ul>
</template>
<style scoped>
.search-input {
  padding: 16px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid;
  width: 30%;
  color: #fff;
}
.search-input:focus {
  outline: 0;
}
.search-input::placeholder {
  color: #fff;
}
.result-list {
  position: absolute;
  background: #a99aff;
  width: 30%;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 5px 10px;
  top: 66px;
}
</style>
