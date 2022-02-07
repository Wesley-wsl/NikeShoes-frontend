/// <reference types="cypress" />

export {};

describe("Cart page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("[data-testid=form-email]")
            .clear()
            .type("wesleywestelley@gmail.com");
        cy.get("[data-testid=form-password]").clear().type("1234");
        cy.get("[data-testid=form-btn]").click();
        cy.url().should("be.equal", "http://localhost:3000/store");
        cy.get(
            ".Store__Manager-sc-78y4f2-3 > :nth-child(1) > :nth-child(2) > p",
        ).click();
        cy.get(
            ".Store__Manager-sc-78y4f2-3 > :nth-child(1) > :nth-child(2) > p",
        ).click();
        cy.get(
            ".Store__Manager-sc-78y4f2-3 > .Store__Button-sc-78y4f2-4",
        ).click();
        cy.get(
            ".styles__Container-sc-1gi2dqa-0 > :nth-child(1) > .StyledIconBase-ea9ulj-0",
        ).click();
        cy.contains("Shopping Cart").should("exist");
        cy.url().should("be.equal", "http://localhost:3000/cart");
    });

    it("Must be able to back to Store page", () => {
        cy.get('[data-testid="backToStore"] > p').click();
        cy.url().should("be.equal", "http://localhost:3000/store");
    });

    it("Must be able Increment/Decrement product quantity", () => {
        cy.get('[data-testid="backToStore"]').click();
        cy.contains("2").should("exist");
        cy.get('[data-testid="decrement"]');
        cy.contains("1").should("exist");
    });

    it("Must be able delete product", () => {
        cy.get(".StyledIconBase-ea9ulj-0").click();
        cy.contains("Product removed from your cart").should("exist");
    });

    it("Must be able go to checkout", () => {
        cy.get('[data-testid="checkout"]');
    });
});
