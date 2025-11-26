/// <reference types="cypress" />

describe('Login Flow', () => {
    it('should navigate to login and sign in successfully', () => {
        // Visit the landing page
        cy.visit('https://main.d18ydoqpsub30.amplifyapp.com/');
        cy.wait(3000);

        // Click on the initial "Sign In" button
        // The user provided HTML shows a button with text "Sign In" and a shield icon
        cy.contains('button', 'Sign In').click();
        cy.wait(3000);

        // Enter username
        // The user provided HTML shows an input with id="email"
        cy.get('#email').should('be.visible').type('JituTest@test.world');
        cy.wait(3000);

        // Enter password
        // The user provided HTML shows an input with id="password"
        cy.get('#password').should('be.visible').type('Jitu@12345');
        cy.wait(3000);

        // Click on Sign in button
        // The user provided HTML shows a button with type="submit" and text "Sign in"
        cy.get('button[type="submit"]').click();
        cy.wait(3000);
    });
});
