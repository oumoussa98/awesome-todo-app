import { describe, it, expect } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";
import type { Todo as TodoType } from "@/stores/todos";

const todo: TodoType = {
  id: 1,
  text: "Todo 1",
  done: false,
};

describe("Todo", () => {
  it("renders properly", () => {
    const wrapper: VueWrapper = shallowMount(Todo, { props: { todo } });
    expect(wrapper.text()).toContain("Todo 1");
  });
});
