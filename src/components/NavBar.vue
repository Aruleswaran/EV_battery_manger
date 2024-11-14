<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">Battery Management</router-link>
      <ul class="nav-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/history" class="nav-link">History</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/alerts" class="nav-link">Alerts</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 10px 20px;
}

.nav-logo {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-item .nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-item .nav-link:hover {
  background-color: #1abc9c;
}
</style>
