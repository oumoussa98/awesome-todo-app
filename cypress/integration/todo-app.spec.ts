const todos: string[] = ["Learn Vue", "Learn Vue Router", "Learn Pinia"];

describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("add and remove todo", () => {
    cy.get(".add-todo input").type(todos[0]).type("{enter}");
    cy.contains(".todo .text", todos[0]);

    cy.get(".remove").click();
    cy.contains(".todo").should("not.exist");
  });

  it("add more todos", () => {
    cy.get(".add-todo input").type(todos[0]);
    cy.get(".add-todo button").click();
    cy.contains(".todo .text", todos[0]);

    cy.get(".add-todo input").type(todos[1]).type("{enter}");
    cy.get(".todo .text")
      .should("have.length", 2)
      .should("contain", todos[0])
      .should("contain", todos[1]);

    cy.get(".add-todo input").type(todos[2]).type("{enter}");
    cy.get(".todo .text")
      .should("have.length", 3)
      .should("contain", todos[0])
      .should("contain", todos[1])
      .should("contain", todos[2]);
  });

  it("mark done todos", () => {
    cy.get(".add-todo input").type(todos[0]).type("{enter}");
    cy.get(".add-todo input").type(todos[1]).type("{enter}");
    cy.get(".add-todo input").type(todos[2]).type("{enter}");

    cy.get("button.done").first().click();
    cy.get(".todo[data-done='true']").should("have.been.visible");

    cy.get("button.done").last().click();
    cy.get(".todo[data-done='true']").should("have.been.visible");
  });

  it("remove todos", () => {
    cy.get(".add-todo input").type(todos[0]).type("{enter}");
    cy.get(".add-todo input").type(todos[1]).type("{enter}");
    cy.get(".add-todo input").type(todos[2]).type("{enter}");

    cy.get(".todo .remove").first().click();
    cy.get(".todo").should("have.length", 2);

    cy.get(".todo .remove").first().click();
    cy.get(".todo").should("have.length", 1);

    cy.get(".todo .remove").first().click();
    cy.get(".todo").should("have.length", 0);
  });
});
