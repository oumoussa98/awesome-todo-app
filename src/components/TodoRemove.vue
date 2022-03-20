<script setup lang="ts">
import { useTodos } from "@/stores/todos";
import type { Todo } from "@/stores/todos";

const { remove } = useTodos();
defineProps<{ todo: Todo }>();
</script>

<template>
  <button class="remove" @click="remove(todo)">
    <img src="@/assets/trash.svg" alt="" />
  </button>
</template>

<style>
.remove {
  display: flex;
  background: #f0f0f0;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;
}
.remove:hover {
  opacity: 0.6;
}
</style>
