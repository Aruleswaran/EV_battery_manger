<template>
  <div class="dashboard">
    <h1>EV Battery Management Dashboard</h1>

    <!-- Input Fields for Model Prediction -->
    <div class="input-container">
      <label for="input1">Input Feature 1 (Voltage):</label>
      <input v-model.number="voltage" type="number" id="input1" placeholder="Enter Voltage" />
    </div>
    <div class="input-container">
      <label for="input2">Input Feature 2 (Current):</label>
      <input v-model.number="current" type="number" id="input2" placeholder="Enter Current" />
    </div>
    <div class="input-container">
      <label for="input3">Input Feature 3 (Temperature):</label>
      <input v-model.number="temperature" type="number" id="input3" placeholder="Enter Temperature" />
    </div>

    <!-- Prediction Button -->
    <button @click="predict">Predict Battery Health</button>

    <!-- Display Prediction Result -->
    <div v-if="prediction !== null" class="result">
      <h2>Predicted Battery Health: {{ prediction }}</h2>
    </div>

    <p>Voltage: {{ voltage }} V</p>
    <p>Current: {{ current }} A</p>
    <p>Temperature: {{ temperature }} °C</p>
  </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs';

export default {
  name: 'DashboardView',
  data() {
    return {
      voltage: 12.5,
      current: 3.4,
      temperature: 25,
      prediction: null,
      model: null,
    };
  },
  methods: {
    // Method to load the TensorFlow.js model
    async loadModel() {
      try {
        // Load model from the 'public/model' folder
        this.model = await tf.loadLayersModel('src/assets/model/model.json');


        console.log('Model loaded successfully');
      } catch (error) {
        console.error('Error loading model:', error);
      }
    },

    // Method to make predictions using the model
    async predict() {
      if (!this.model) {
        console.log('Model not loaded');
        return;
      }

      // Prepare the input tensor from the data
      const inputTensor = tf.tensor2d([[this.voltage, this.current, this.temperature]]);

      // Make the prediction
      const output = this.model.predict(inputTensor);

      // Get the prediction result (assuming it's a single scalar output)
      const prediction = output.dataSync()[0]; // Get the scalar value
      this.prediction = prediction;

      console.log('Prediction:', prediction);
    }
  },

  // Load the model when the component is mounted
  mounted() {
    this.loadModel();
  }
};
</script>

<style scoped>
.dashboard {
  background-image: url('@/assets/shutterstock.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background-color: #6af08a; /* Light gray background */
  border-radius: 10px;
}

h1 {
  font-size: 28px;
  color: #e3454a; /* Dark gray */
  margin-bottom: 1rem;
}

.input-container {
  margin-bottom: 15px;
}

input {
  padding: 5px;
  margin-left: 10px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.result {
  margin-top: 30px;
  font-size: 20px;
  color: green;
}

p {
  font-size: 18px;
  color: white;
}
</style>
