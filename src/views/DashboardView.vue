<template>
  <div class="dashboard">
    
    <h1>EV Battery Management Dashboard</h1>
    <p>Voltage: {{ voltage }} V</p>
    <p>Current: {{ current }} A</p>
    <p>Temperature: {{ temperature }} °C</p>
  </div>

</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      voltage: 12.5,
      current: 3.4,
      temperature: 25,
    };
  },
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

.foo{
    text-align: center;
    margin-top: 50%;
  }
  h1 {
    color: #3498db;
    text-align: center;
    text-orientation: upright;
  }
  
  h2 {
    color: #2b85df;
    margin-top: 20px;
  }
  
  p, ul {
    font-size: 1.1em;
    line-height: 1.6;
    color: aliceblue;
  }
  

</style>
