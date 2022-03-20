import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import Todos from "@/components/Todos.vue";
import { setActivePinia, createPinia } from "pinia";

describe("Todos", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  }),
    it("renders properly", () => {
      const wrapper: VueWrapper = shallowMount(Todos);
      expect(wrapper.text()).toContain("todos");
    });
});
