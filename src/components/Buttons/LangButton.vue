<template>
    <div>
      <button @click="switchLanguage('en')" class="lang-button en">Eng</button>
      <button @click="switchLanguage('ua')" class="lang-button ua">Укр</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  
  const { locale } = useI18n();
  
  const switchLanguage = (lang) => {
    locale.value = lang;
  };
  </script>

<style scoped>
.lang-button {
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s;
}

.lang-button.en {
  background-color: #007bff; /* Синий цвет для английского */
}

.lang-button.ua {
  background-color: #28a745; /* Зеленый цвет для украинского */
}

.lang-button:hover {
  background-color: #0056b3; /* Темнее синий при наведении */
}

.lang-button:active {
  transform: scale(0.98); /* Легкое уменьшение кнопки при нажатии */
}
</style>

  