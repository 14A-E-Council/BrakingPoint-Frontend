context("Basic", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("basic nav", () => {
    cy.url().should("eq", "http://127.0.0.1:8080/");

    cy.contains("Jedlik Vite-Quasar").should("exist");

    // cy.get("#input").type("Vitesse{Enter}").url().should("eq", "http://localhost:3333/hi/Vitesse");

    // cy.contains("[Default Layout]").should("exist");

    //cy.get("[btn]").click().url().should("eq", "http://localhost:3333/");
  });

  // it("markdown", () => {
  //   cy.get('[title="About"]').click().url().should("eq", "http://localhost:3333/about");

  //   cy.get(".shiki").should("exist");
  // });
});
