<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="nav">
      <RouterLink to="/">
        <div class="nav-item">
          <img src="@/assets/home.svg" alt="home svg" width="20" />
          <span>home</span>
        </div>
      </RouterLink>
      <RouterLink to="/about">
        <div class="nav-item">
          <img src="@/assets/about.svg" alt="about svg" width="20" />
          <span>about</span>
        </div>
      </RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  font-weight: normal;
}

.nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
}

.nav-item {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  border-radius: 10px;
  background: #ffffff;
  padding: 0.15rem 0.9rem 0.2rem 0.9rem;
  color: #303030;
  font-size: 1rem;
}

.nav a {
  text-decoration: none;
}
</style>
