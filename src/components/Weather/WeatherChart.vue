<script setup>
import { onMounted, ref, defineProps, toRefs } from 'vue'
import Chart from 'chart.js/auto'
import { useRoute } from 'vue-router';
const route = useRoute()
const props = defineProps(['chartLabel', 'chartData'])

const { chartLabel, chartData } = toRefs(props)

const chartCanvas = ref(null)

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel.value,
      datasets: [
        {
          label: 'Weather',
          data: chartData.value,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'rgba(54, 162, 235, 1)',
            font: {
              size: 14,
              family: 'Arial',
              style: 'italic',
              weight: 'bold'
            }
          },
          title: {
            display: true,
            text: 'Температура (°C)',
            color: 'rgba(54, 162, 235, 1)',
            font: {
              size: 16,
              family: 'Arial',
              style: 'italic',
              weight: 'bold'
            }
          }
        },
        x: {
          ticks: {
            color: 'rgba(255, 99, 132, 1)',
            font: {
              size: 14,
              family: 'Arial',
              style: 'italic',
              weight: 'bold'
            }
          },
          title: {
            display: true,
            text: 'Дата',
            color: 'rgba(255, 99, 132, 1)',
            font: {
              size: 16,
              family: 'Arial',
              style: 'italic',
              weight: 'bold'
            }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'rgba(75, 192, 192, 1)',
            font: {
              size: 14,
              family: 'Arial',
              style: 'italic',
              weight: 'bold'
            }
          }
        }
      }
    }
  })
})
</script>

<template>
  <canvas ref="chartCanvas" :key="route.params.lat" class="canvas"></canvas>
</template>

<style scoped>
.canvas {
  width: 100%; 
  height: auto; 
  max-width: 900px;
  max-height: 400px; 
}

@media (max-width: 768px) {
  .canvas {
    max-width: 100%;
    max-height: 300px; 
  }
}

@media (max-width: 480px) {
  .canvas {
    max-width: 100%; 
    max-height: 200px;
  }
}
</style>