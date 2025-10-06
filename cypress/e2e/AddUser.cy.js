/// <reference types="cypress" />
import  { HomePage } from '../Pages/HomePage/HomePageMethods';

describe('Add User Test', () => {
    it('Add user using Page Object Model', () => {
        cy.visit('https://parabank.parasoft.com/parabank');

        const reg = HomePage.clickLoginButton();
        reg.fillRegistrationForm();
        
        cy.get('#rightPanel').should('contain', 'Welcome user_')
    });
});