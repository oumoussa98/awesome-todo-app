<script setup lang="ts">
import TodoRemove from "./TodoRemove.vue";
import TodoDone from "./TodoDone.vue";
import type { Todo } from "@/stores/todos";

defineProps<{ todo: Todo }>();
</script>

<template>
  <div :data-done="todo.done" class="todo">
    <span :title="todo.text" class="text" v-text="todo.text"></span>
    <TodoDone :todo="todo" />
    <TodoRemove :todo="todo" />
  </div>
</template>

<style>
.todo {
  width: 100%;
  padding: 0.5rem 1rem;
  background: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5px;
  margin-top: 0.5rem;
}

.todo .text {
  max-width: 320px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.todo[data-done="true"] {
  text-decoration: line-through;
}
.todo[data-done="true"] {
  background: rgba(255, 255, 255, 0.598);
}
</style>
