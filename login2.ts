/// <reference types="cypress" />

class LoginPage {
    // Selectors
    backToHomeLink = 'a[href="/"]';
    welcomeMessage = 'h1.font-heading';
    emailInput = 'input[name="email"]';
    passwordInput = 'input[name="password"]';
    signInButton = 'button[type="submit"]';

    visit() {
        cy.visit('https://main.d18ydoqpsub30.amplifyapp.com/auth/login/');
    }

    navigateBackToHome() {
        cy.get(this.backToHomeLink).click();
    }

    getWelcomeMessage() {
        return cy.get(this.welcomeMessage);
    }

    enterEmail(email: string) {
        cy.get(this.emailInput).type(email);
    }

    enterPassword(password: string) {
        cy.get(this.passwordInput).type(password);
    }

    signIn() {
        cy.get(this.signInButton).click();
    }
}

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
        cy.wait(3000);
    });

    it('Verify that the user can successfully navigate back to the home page by clicking the "Back to Home" link.', () => {
        loginPage.navigateBackToHome();
        cy.wait(3000);
        cy.url().should('eq', 'https://main.d18ydoqpsub30.amplifyapp.com/');
    });

    it('Check that the welcome message "Welcome back" is displayed prominently when the user accesses the signin page.', () => {
        loginPage.getWelcomeMessage().should('contain.text', 'Welcome back');
        cy.wait(3000);
    });

    it('Confirm that the user can enter a valid email address and password, then successfully sign in to their account.', () => {
        loginPage.enterEmail('JituTest@test.world');
        cy.wait(3000);
        loginPage.enterPassword('Jitu@12345');
        cy.wait(3000);
        loginPage.signIn();
        cy.wait(3000);
        // Replace with the expected URL after successful sign-in
        // Note: This assertion might fail if the credentials are not valid or the redirect is different
        cy.url().should('include', '/dashboard/');
        cy.wait(3000);
    });
});
