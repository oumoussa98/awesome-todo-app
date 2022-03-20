import { defineStore } from "pinia";

import { reactive } from "vue";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const todos = reactive<Todo[]>([]);

export const useTodos = defineStore({
  id: "todos",
  getters: {
    todos: () => todos,
  },
  actions: {
    add: (newTodo: string): void => {
      todos.push({
        id: todos.length + 1,
        text: newTodo,
        done: false,
      });
    },

    remove: (todo: Todo): void => {
      const index = todos.indexOf(todo);
      todos.splice(index, 1);
    },

    markDone: (todo: Todo): void => {
      const index = todos.indexOf(todo);
      todos[index]["done"] = !todos[index]["done"];
    },
  },
});
