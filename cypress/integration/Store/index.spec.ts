/// <reference types="cypress" />

export {};

describe("Store page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("[data-testid=form-email]")
            .clear()
            .type("wesleywestelley@gmail.com");
        cy.get("[data-testid=form-password]").clear().type("1234");
        cy.get("[data-testid=form-btn]").click();
        cy.url().should("be.equal", "http://localhost:3000/store");
    });

    it("Should show a toastify on click in button", () => {
        cy.get(
            ".Store__Manager-sc-78y4f2-3 > .Store__Button-sc-78y4f2-4",
        ).click();
        cy.get(".Toastify__toast-body").should("exist");
    });

    it("Must be able to log out", () => {
        cy.get('[data-testid="openLogout"]').click();
        cy.get('[data-testid="logout"]').click();
        cy.url().should("be.equal", "http://localhost:3000/");
    });

    it("Must be able alternate between Women and Men shoes", () => {
        cy.get("ul > :nth-child(2)").click();
        cy.contains("Women's Shoe").should("exist");
        cy.get("ul > :nth-child(1)").click();
        cy.contains("Men's Shoe").should("exist");
    });

    it("Should go to cart", () => {
        cy.get(
            ".styles__Container-sc-1gi2dqa-0 > :nth-child(1) > .StyledIconBase-ea9ulj-0",
        ).click();
        cy.contains("Shopping Cart").should("exist");
        cy.url().should("be.equal", "http://localhost:3000/cart");
    });
});
