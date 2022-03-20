<script setup lang="ts">
import { ref, type Ref } from "vue";
import { useTodos } from "@/stores/todos";

const { add } = useTodos();

let newTodo: Ref = ref("");

const addTodo = () => {
  if (!newTodo.value) return;
  add(newTodo.value);
  newTodo.value = "";
};
</script>

<template>
  <div class="add-todo">
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<style>
.add-todo {
  display: flex;
  justify-content: center;
  max-width: 450px;
  margin: 0.5rem auto;
}
.add-todo input {
  width: 350px;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: box-shadow 0.3s;
}
.add-todo input:focus {
  box-shadow: 0px 0px 2px 1px rgb(3, 195, 131);
}

.add-todo button {
  padding: 0.55rem 1.8rem;
  border: 1px solid rgb(3, 175, 138);
  border-radius: 4px;
  margin: 0 0 0 1rem;
  background: #02c796;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;
}

.add-todo button:hover {
  opacity: 0.8;
}
</style>
