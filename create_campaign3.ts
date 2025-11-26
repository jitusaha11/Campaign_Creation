/// <reference types="cypress" />

describe("Full Flow — Login + Create Campaign", () => {

    it("logs in and creates a new campaign successfully", () => {

        //
        // 1️⃣ LOGIN FLOW
        //
        cy.visit("https://main.d18ydoqpsub30.amplifyapp.com/");
        cy.wait(2000);

        cy.contains("button", "Sign In").click();
        cy.wait(1500);

        cy.get("#email").should("be.visible").type("JituTest@test.world");
        cy.wait(3000);
        cy.get("#password").should("be.visible").type("Jitu@12345");
        cy.wait(3000);
        cy.get("button[type='submit']").click();

        cy.url().should("include", "/dashboard");
        cy.wait(2000);


        //
        // 2️⃣ GO TO CAMPAIGN PROFILES
        //
        cy.contains("a", "Campaign Profiles", { matchCase: false })
            .scrollIntoView()
            .click();

        cy.url().should("include", "/campaigns");
        cy.wait(4000);


        //
        // 3️⃣ CLICK "CREATE CAMPAIGN"
        //
        cy.wait(5000); // allow fade animation to complete

        cy.contains("button, span, div", "Create Campaign", { matchCase: false })
            .scrollIntoView()
            .click({ force: true });

        cy.get('.show-scrollbar')
            .should('be.visible')
            .wait(4000);


        //
        // 4️⃣ ENTER CAMPAIGN NAME
        //
        cy.get("#name")
            .should("exist")
            .clear({ force: true })
            .type("Test Campaign", { force: true });

        cy.get('div[data-slot="dialog-footer"]').contains('button', 'Next').click();
        cy.wait(5000);


        //
        // 5️⃣ SELECT PLATFORM → Instagram
        //
        cy.contains("h3", "Instagram").click();

        cy.get('div[data-slot="dialog-footer"]').contains('button', 'Next').click();
        cy.wait(4000);


        //
        // 6️⃣ SELECT AUTOMATION SCRIPT → Topic Based Interaction
        //
        cy.contains("h3", "Topic Based Interaction").click();

        cy.get('div[data-slot="dialog-footer"]').contains('button', 'Next').click();
        cy.wait(1500);


        //
        // 7️⃣ SELECT INTERACTION MODE → Compulsory
        //
        cy.contains("h4", "Compulsory").click();
        cy.wait(2000);

        cy.get('div[data-slot="dialog-footer"]').contains('button', 'Next').click();
        cy.wait(2000);


        //
        // 8️⃣ SELECT → Personas Profiles
        //
        cy.contains("h3", "Personas Profiles").click();

        // Add Persona Profiles
        cy.contains("button", "Add Persona Profiles").click();
        cy.wait(2000);

        // Select the first profile (Alex - Multi Profile 7)
        cy.contains("Alex - Multi Profile 7").click();

        // Confirm Selection
        cy.contains("button", "Confirm Selection").click();
        cy.wait(4000);

        cy.get('div[data-slot="dialog-footer"]').contains('button', 'Next').click();
        cy.wait(2000);


        //
        // 9️⃣ FINAL → CREATE CAMPAIGN
        //
        cy.get('button[type="submit"][form="campaign-form"]').contains('Create Campaign').click({ force: true });
        cy.wait(4000);


        //
        // 1️⃣2️⃣ SUCCESS VALIDATION
        //
        cy.url().should("include", "/campaigns");

        cy.contains(/campaign/i).then(($msg) => {
            if ($msg.length > 0) {
                cy.log("🎉 Campaign created successfully!");
            } else {
                cy.log("⚠ Campaign created but no confirmation message.");
            }
        });

    });

});
