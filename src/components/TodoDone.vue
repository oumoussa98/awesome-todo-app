<script setup lang="ts">
import { useTodos } from "@/stores/todos";
import type { Todo } from "@/stores/todos";

const { markDone } = useTodos();
defineProps<{ todo: Todo }>();
</script>

<template>
  <button class="done" @click="markDone(todo)">
    <img src="@/assets/done.svg" alt="done button svg" width="24" />
  </button>
</template>

<style>
.done {
  display: flex;
  margin-left: auto;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  background: #f0f0f0;
  z-index: 4;
  opacity: 1 !important;
  transition: opacity 0.4s ease-in-out;
}

.done:hover {
  opacity: 0.6;
}
</style>
