<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

defineExpose({
  openModal,
  closeModal,
});
</script>

<template>
    <div class="modal-overlay" v-if="isModalOpen">
  <div class="modal-container">
    <div class="modal-header">
      <h2>Confirm Deletion</h2>
      <button class="close-button" @click="closeModal">&times;</button>
    </div>
    <div class="modal-body">
      <p></p>
    </div>
    <div class="modal-footer">
      <button class="action-button cancel-button" @click="closeModal">Cancel</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background-color: #fff;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.modal-header h2 {
  margin: 0;
  font-size: 18px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.close-button:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
  font-size: 16px;
  color: #333;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
}

.action-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.cancel-button {
  background-color: #e0e0e0;
  color: #333;
}

.cancel-button:hover {
  background-color: #ccc;
}

.delete-button {
  background-color: #ff4d4d;
  color: #fff;
}

.delete-button:hover {
  background-color: #ff1a1a;
}
</style>