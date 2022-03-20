import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import TodoAdd from "@/components/TodoAdd.vue";
import { setActivePinia, createPinia } from "pinia";
import { useTodos, type Todo } from "@/stores/todos";

describe("TodoAdd", () => {
  let wrapper: VueWrapper;
  let text: string;
  let todos: Todo[];
  let todosLength: number;

  beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = shallowMount(TodoAdd);
    text = "new todo 567FF";
    todos = useTodos().todos;
    todosLength = todos.length;
  });

  it("add new todos on button click", async () => {
    await wrapper.get("input").setValue(text);
    await wrapper.get("button").trigger("click");

    expect(wrapper.get("input").element.value).toEqual("");
    expect(todos[todos.length - 1]["text"]).toEqual(text);
    expect(todos.length - 1).toEqual(todosLength);
  });

  it("add new todos on enter keyup", async () => {
    await wrapper.get("input").setValue(text);
    await wrapper.get("input").trigger("keyup", { key: "enter" });

    expect(wrapper.get("input").element.value).toEqual("");
    expect(todos[todos.length - 1]["text"]).toEqual(text);
    expect(todos.length - 1).toEqual(todosLength);
  });
});
