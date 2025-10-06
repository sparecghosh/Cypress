// 📁 HomePageMethods.js
import { HomePageLocators } from './HomepageLocator';
import { RegistrationMethods } from './RegistrationMethods';

class HomePageMethods {
  clickLoginButton() {
    HomePageLocators.loginButton().click();
    return new RegistrationMethods(); // return another page object
  }
}

// Export a singleton instance
export const HomePage = new HomePageMethods();
