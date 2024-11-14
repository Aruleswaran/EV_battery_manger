<template>
  <div>
    <h2>Enter Battery Details</h2>
    <form @submit.prevent="predict">
      <div>
        <label for="voltage">Enter Battery Voltage (V):</label>
        <input v-model="voltage" type="number" id="voltage" required />
      </div>

      <div>
        <label for="current">Enter Battery Current (A):</label>
        <input v-model="current" type="number" id="current" required />
      </div>

      <div>
        <label for="temperature">Enter Battery Temperature (°C):</label>
        <input v-model="temperature" type="number" id="temperature" required />
      </div>

      <div>
        <label for="percentage">Enter Battery Percentage (%):</label>
        <input v-model="percentage" type="number" id="percentage" required />
      </div>

      <!-- Predict button is always visible -->
      <button type="submit" :disabled="!modelLoaded">
        {{ modelLoaded ? "Predict" : "Loading Model..." }}
      </button>
    </form>

    <div v-if="warningMessage">
      <h3>{{ warningMessage }}</h3>
    </div>

    <div v-if="loading && !modelLoaded">
      <p>Loading model...</p>
    </div>
  </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs';

export default {
  data() {
    return {
      voltage: "",
      current: "",
      temperature: "",
      percentage: "",
      warningMessage: "",
      loading: true,
      modelLoaded: false,
      model: null,
    };
  },
  async created() {
    try {
      this.model = await tf.loadLayersModel(process.env.BASE_URL + 'assets/model/model.json');
      // Update this path if needed
      this.modelLoaded = true;
      this.loading = false;
      console.log("Model loaded successfully");
    } catch (error) {
      console.error("Error loading model:", error);
      this.warningMessage = "Error loading model. Please try again later.";
      this.loading = false;
    }
  },
  methods: {
    async predict() {
      if (!this.modelLoaded) {
        this.warningMessage = "Model is not loaded yet. Please try again later.";
        return;
      }

      const battery_voltage = parseFloat(this.voltage);
      const battery_current = parseFloat(this.current);
      const battery_temperature = parseFloat(this.temperature);
      const battery_percentage = parseFloat(this.percentage);

      if (isNaN(battery_voltage) || isNaN(battery_current) || isNaN(battery_temperature) || isNaN(battery_percentage)) {
        this.warningMessage = "Please enter valid numbers for all fields.";
        return;
      }

      const inputTensor = tf.tensor([[battery_voltage, battery_current, battery_temperature]]);

      try {
        const prediction = await this.model.predict(inputTensor).data();

        if (prediction[0] > 0.5) {
          this.warningMessage = "Warning: Battery is in critical condition";
        } else {
          this.warningMessage = "Battery is operating normally";
        }
      } catch (error) {
        console.error("Prediction error:", error);
        this.warningMessage = "Error during prediction. Please try again.";
      }
    }
  }
};
</script>

<style scoped>
button {
  display: inline-block;
  margin-top: 10px;
}
</style>
