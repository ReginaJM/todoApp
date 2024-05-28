import { first } from "cypress/types/lodash/index.js";

describe('todo App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })

  it('should add a todo', () => {
    // Act
    cy.get("input#todoText").type("Testing, testing");
    cy.get("button#save").click();
    // Assert
    cy.get("ul > li")
      .should("have.length", 1)
      .should("have.text", "Testing, testing")
  })

  it('should not add empty todo', () => {
    // Act
    cy.get("button#save").click();
    // Assert
    cy.get("ul > li")
      .should("have.length", 0)
  })

  it('should toggle a todo', () => {
    // Assign
    cy.get("input#todoText").type("Testing, testing");
    cy.get("button#save").click();
    cy.get("ul > li")
      .should("have.length", 1)
      .should("have.text", "Testing, testing")
      .should("not.have.class", "done")

    // Act
    cy.get("ul > li:first").click();

    // Assert
    cy.get("ul > li")
      .should("have.class", "done")
  })
})