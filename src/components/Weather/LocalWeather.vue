<script setup>
import { useRoute } from 'vue-router';
import FiveDaysView from './FiveDaysView.vue'
import WeatherCard from './WeatherCard.vue'
import WeatherWrapper from './WeatherWrapper.vue'

import { ref } from 'vue'
const route = useRoute()

const fiveDaysTabActive = ref(false)
const setFiveDaysView = (value) => {
  fiveDaysTabActive.value = value
}
</script>
<template>
  <div class="search-result-wrapper">
    <div class="banner" v-if="!route.params.key" >
      <p>{{ $t('save.sity') }}</p>
    </div>
    <WeatherWrapper>
      <div class="tab-buttons">
        <button
          class="tab-button"
          :class="{ active: !fiveDaysTabActive }"
          @click="setFiveDaysView(false)"
        >
          {{  $t('one.day') }}
        </button>
        <button
          class="tab-button"
          :class="{ active: fiveDaysTabActive }"
          @click="setFiveDaysView(true)"
        >
        {{  $t('five.days') }}
        </button>
      </div>

      <div v-if="fiveDaysTabActive">
        <FiveDaysView />
      </div>
      <div v-else>
        <WeatherCard />
      </div>
    </WeatherWrapper>
  </div>
</template>
<style scoped>
.search-result-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  align-items: center;
  color: #fff;
  font-size: 24px;
}
.banner {
  text-align: center;
  padding: 5px;
  width: 100%;
  background: #0e0f50;
}
.tab-buttons {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  align-self: self-start;
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
}

.tab-button.active {
  background-color: #3498db;
  color: #ffffff;
}

.tab-button:hover:not(.active) {
  background-color: #e6f4fb;
  border-color: #2980b9;
}

.tab-button:active {
  transform: scale(0.98);
}
</style>
