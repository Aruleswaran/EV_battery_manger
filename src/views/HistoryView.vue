<template>
  <div class="history">
    <h1>History</h1>
    <!-- Only render the line-chart component if chartData is defined -->
    <line-chart v-if="chartData" :chart-data="chartData" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default {
  name: 'HistoryView',
  components: {
    LineChart: Line,
  },
  data() {
    return {
      // Ensure that chartData is correctly initialized
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels
        datasets: [
          {
            label: 'Voltage Over Time',
            data: [12.1, 12.3, 12.5, 12.7, 12.8, 13.0], // Y-axis data points
            borderColor: '#3498db', /* Blue line */
            backgroundColor: 'rgba(52, 152, 219, 0.2)', /* Light blue fill */
            borderWidth: 2,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.history {
  padding: 2rem;
  background-color: #f5f7fa; /* Light background for contrast */
  border-radius: 10px;
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #2c3e50; /* Dark blue */
  margin-bottom: 1rem;
}
</style>
