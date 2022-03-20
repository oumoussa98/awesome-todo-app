import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import TodoDone from "@/components/TodoDone.vue";
import { setActivePinia, createPinia } from "pinia";
import { useTodos, type Todo } from "@/stores/todos";
import dummyTodos from "./todos";

describe("TodoDone", () => {
  let wrapper: VueWrapper;
  let todos: Todo[];
  let todo: Todo;
  beforeEach(() => {
    setActivePinia(createPinia());
    const usetodos = useTodos();
    dummyTodos.map((td: Todo) => usetodos.add(td.text));
    todos = usetodos.todos;
    todo = todos[0];
    wrapper = shallowMount(TodoDone, { props: { todo } });
  });
  it("mark done a given todo", async () => {
    await wrapper.trigger("click");
    expect(todo.done).toBeTruthy();

    await wrapper.trigger("click");
    expect(todo.done).toBeFalsy();
  });
});
