import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import TodoRemove from "@/components/TodoRemove.vue";
import { setActivePinia, createPinia } from "pinia";
import { useTodos, type Todo } from "@/stores/todos";
import dummyTodos from "./todos";

describe("TodoRemove", () => {
  let wrapper: VueWrapper;
  let todos: Todo[];
  let todo: Todo;
  beforeEach(() => {
    setActivePinia(createPinia());
    const usetodos = useTodos();
    dummyTodos.map((td: Todo) => usetodos.add(td.text));
    todos = usetodos.todos;
    todo = todos[0];
    wrapper = shallowMount(TodoRemove, { props: { todo } });
  });
  it("remove a given todo", async () => {
    await wrapper.trigger("click");

    expect(todos.length).toEqual(dummyTodos.length - 1);
    expect(todos.indexOf(todo)).toBe(-1);
  });
});
