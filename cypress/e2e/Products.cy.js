/* eslint-disable no-undef */
describe("Products", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("displays all data properly in table", () => {
        cy.get("[data-cy='products-table'] tbody tr").should("have.length", 5);
        cy.get("[data-cy='products-table'] tbody tr td")
            .first()
            .should("have.text", "1");
        cy.get("[data-cy='products-table'] tbody tr td")
            .eq(1)
            .should("have.text", "cerulean");
        cy.get("[data-cy='products-table'] tbody tr td")
            .eq(2)
            .should("have.text", "2000");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(0)
            .should("have.text", "5");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(1)
            .should("have.text", "tigerlily");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(2)
            .should("have.text", "2004");
        // Has pagination links
        cy.get(".pagination a ").should("have.length", 2);
        cy.get(".pagination a ").first().contains("Prev");
        cy.get(".pagination a ").last().contains("Next");
    });

    it("navigates through pagination to next page and displays proper data", () => {
        cy.get('[data-cy="Next"]').click();
        cy.get('[data-cy="Next"]').click();
        cy.wait(500);
        cy.get("[data-cy='products-table'] tbody tr").should("have.length", 2);
        cy.get("[data-cy='products-table'] tbody tr td")
            .first()
            .should("have.text", "11");
        cy.get("[data-cy='products-table'] tbody tr td")
            .eq(1)
            .should("have.text", "turquoise");
        cy.get("[data-cy='products-table'] tbody tr td")
            .eq(2)
            .should("have.text", "2010");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(0)
            .should("have.text", "12");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(1)
            .should("have.text", "honeysuckle");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(2)
            .should("have.text", "2011");
    });

    it("navigates back to Previous page and displays proper data", () => {
        cy.get('[data-cy="Next"]').click();
        cy.get('[data-cy="Prev"]').should("be.visible");
        cy.get('[data-cy="Prev"]').click();
        cy.wait(500);

        cy.get("[data-cy='products-table'] tbody tr td")
            .first()
            .should("have.text", "1");
        cy.get("[data-cy='products-table'] tbody tr td")
            .eq(1)
            .should("have.text", "cerulean");
        cy.get("[data-cy='products-table'] tbody tr td")
            .eq(2)
            .should("have.text", "2000");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(0)
            .should("have.text", "5");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(1)
            .should("have.text", "tigerlily");
        cy.get("[data-cy='products-table'] tbody tr")
            .last()
            .find("td")
            .eq(2)
            .should("have.text", "2004");
    });
});
