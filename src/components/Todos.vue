<script setup lang="ts">
import TodoAdd from "./TodoAdd.vue";
import Todo from "./Todo.vue";

import { useTodos } from "@/stores/todos";

const { todos } = useTodos();
</script>

<template>
  <div class="title">
    <img src="@/assets/todos.svg" alt="todos svg" width="24" />
    <h1>todos</h1>
  </div>
  <TodoAdd />
  <div class="todos">
    <transition-group name="slide">
      <Todo v-for="todo in todos" :todo="todo" :key="todo.id" />
    </transition-group>
  </div>
</template>

<style>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0.5rem;
}

.todos {
  position: relative;
  margin: 2rem auto;
  max-width: 452px;
}

.slide-move,
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-leave-active {
  position: absolute;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
