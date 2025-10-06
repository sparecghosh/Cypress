// 📁 HomePageMethods.js
import { HomePageLocators } from './HomepageLocator';
import { Registration } from '../RegistrationPage/RegistrationMethods';

class HomePageMethods {
  clickLoginButton() {
    HomePageLocators.loginButton().should('be.visible').click();
    // After clicking login, we need to click the "Register" link to go to registration
    cy.contains('Register').click();
    return Registration;
  }
}

// Export a singleton instance
export const HomePage = new HomePageMethods();
