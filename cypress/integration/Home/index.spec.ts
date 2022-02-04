/// <reference types="cypress" />

export {};

describe("Home page", async () => {
    before(() => {
        cy.visit("http://localhost:3000");
        cy.get("[data-testid=form-btn]").should("exist");
    });

    it("Don't must be able to login without email/password", () => {
        cy.get("[data-testid=form-btn]").click();
        cy.get(".Toastify__toast-body").should("exist");
    });

    it("Don't must be able to login without email", () => {
        cy.get("[data-testid=form-email]").clear();
        cy.get("[data-testid=form-password]").type("1234");
        cy.get("[data-testid=form-btn]").click();
        cy.get(".Toastify__toast-body").should("exist");
    });

    it("Don't must be able to login without password", () => {
        cy.get("[data-testid=form-password]").clear();
        cy.get("[data-testid=form-email]").type("wesleywestelley@gmail.com");
        cy.get("[data-testid=form-btn]").click();
        cy.get(".Toastify__toast-body").should("exist");
    });
});

// Deve ser possível logar - Verificar se requisição post foi um sucesso.
