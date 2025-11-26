describe("Google Test", () => {
    it("Search something", () => {
        cy.visit("https://google.com")
        cy.get("textarea[name='q']").should("be.visible").type("virat kohli{enter}")
        cy.contains("I am not a bot").should("not.exist")

        // Wait for the 'All' tab to ensure results have loaded
        cy.contains("All").should("be.visible")
        cy.wait(4000)
        // Click on the 'Images' link. 
        // Using 'a' tag selector as the user provided HTML shows it is a link.
        cy.contains("a", "Images").should("be.visible").click()
        cy.wait(4000)
        // Verify images are visible and click one
        cy.get("img").should("be.visible")
        cy.get("img").eq(2).click()
    })
})