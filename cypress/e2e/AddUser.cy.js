/// <reference types="cypress" />
import  { HomePage } from '../Pages/HomePage/HomePageMethods';

describe('Add User Test', () => {
    it('Add user using Page Object Model', () => {
        cy.visit('https://parabank.parasoft.com/parabank');

        const reg = HomePage.clickLoginButton();
        reg.fillRegistrationForm();
        
        // Debug: Let's see what's actually on the page
        cy.get('#rightPanel').then($el => {
            cy.log('Right panel content:', $el.text());
        });
        
        // Check for successful registration - could be different text
        cy.get('#rightPanel').should('be.visible')
            .and('contain.text', 'Welcome');
    });
});