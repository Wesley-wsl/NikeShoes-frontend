/// <reference types="cypress" />

export {};

describe("Register page", () => {
    it("Should go to page register", () => {
        cy.visit("http://localhost:3000/register");
        cy.contains("Register").should("exist");
    });

    it("Don't should register without first name", () => {
        cy.visit("http://localhost:3000/register");
        cy.get('[data-testid="form-last_name"]').type("Jorge");
        cy.get('[data-testid="form-email"]').type("jorge@gmail.com");
        cy.get('[data-testid="form-password"]').type("1234");
        cy.get('[data-testid="form-btn"]').click();
        cy.get(".Toastify__toast-body").should("exist");
    });

    it("Don't should register without last name", () => {
        cy.visit("http://localhost:3000/register");
        cy.get('[data-testid="form-first_name"]').type("August");
        cy.get('[data-testid="form-email"]').type("jorge@gmail.com");
        cy.get('[data-testid="form-password"]').type("1234");
        cy.get('[data-testid="form-btn"]').click();
        cy.get(".Toastify__toast-body").should("exist");
    });
    it("Don't should register without email", () => {
        cy.visit("http://localhost:3000/register");
        cy.get('[data-testid="form-first_name"]').type("August");
        cy.get('[data-testid="form-last_name"]').type("Jorge");
        cy.get('[data-testid="form-password"]').type("1234");
        cy.get('[data-testid="form-btn"]').click();
        cy.get(".Toastify__toast-body").should("exist");
    });
    it("Don't should register without password", () => {
        cy.visit("http://localhost:3000/register");
        cy.get('[data-testid="form-first_name"]').type("August");
        cy.get('[data-testid="form-last_name"]').type("Jorge");
        cy.get('[data-testid="form-email"]').type("jorge@gmail.com");
        cy.get('[data-testid="form-btn"]').click();
        cy.get(".Toastify__toast-body").should("exist");
    });
});
