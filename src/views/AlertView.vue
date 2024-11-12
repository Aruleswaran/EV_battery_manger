<template>
  <div class="alerts">
    <h1>Alert System</h1>
    <p>This page will display alerts for anomalies detected in the battery system.</p>
    <div class="alert-message">
      <strong>Warning:</strong> High temperature detected in the battery cell!
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertView',
};
</script>

<style scoped>
.alerts {
  padding: 2rem;
  background-color: #ffcccc; /* Light red background for alerts */
  border-radius: 10px;
  text-align: center;
}

h1 {
  font-size: 24px;
  color: #c0392b; /* Dark red for alert title */
  margin-bottom: 1rem;
}

.alert-message {
  padding: 1rem;
  background-color: #e74c3c; /* Red background */
  color: #fff; /* White text */
  border-radius: 5px;
  margin-top: 10px;
}
</style>
