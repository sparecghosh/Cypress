// 📁 HomePageMethods.js
import { HomePageLocators } from './HomepageLocator';
import { Registration } from '../RegistrationPage/RegistrationMethods';

class HomePageMethods {
  clickLoginButton() {
    HomePageLocators.loginButton().click();
    return Registration;
  }
}

// Export a singleton instance
export const HomePage = new HomePageMethods();
