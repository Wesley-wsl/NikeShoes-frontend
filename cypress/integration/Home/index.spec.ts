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

    it("Must be able to redirect to page register", () => {
        cy.get("a").click();
        cy.url().should("be.equal", "http://localhost:3000/register");
        cy.contains("Register").should("exist");
    });

    it("Must be able to login with email and password", () => {
        cy.visit("http://localhost:3000");
        cy.get("[data-testid=form-email]")
            .clear()
            .type("wesleywestelley@gmail.com");
        cy.get("[data-testid=form-password]").clear().type("1234");
        cy.get("[data-testid=form-btn]").click();
        cy.intercept({
            method: "POST",
            url: "https://nikeshoes-api.herokuapp.com/users/login",
        }).as("login");
        cy.wait("@login").then(xhr => {
            expect(xhr.response?.statusCode).to.equal(200);
        });
        cy.url().should("be.equal", "http://localhost:3000/store");
        cy.contains("Men").should("exist");
        cy.contains("Women").should("exist");
    });
});

// Deve ser possível logar - Verificar se requisição post foi um sucesso.
