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
    <Todo v-for="todo in todos" :todo="todo" :key="todo.id" />
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 2rem auto;
  max-width: 452px;
}
</style>
