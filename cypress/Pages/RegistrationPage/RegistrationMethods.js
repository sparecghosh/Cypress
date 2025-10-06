import { RegistrationPageLocators } from "./RegistrationLocators";
import { DataGenerator } from "../../support/DataGenerator";

export class RegistrationMethods {
    fillRegistrationForm() {
        const locators = RegistrationPageLocators;

        locators.firstName().type(`Test${DataGenerator.generateRandomString(5)}`);
        locators.lastName().type(`User${DataGenerator.generateRandomString(5)}`);
        locators.street().type(`${DataGenerator.generateRandomNumber(100, 9999)} Test Street`);
        locators.city().type(`TestCity${DataGenerator.generateRandomString(3)}`);
        locators.state().type(['CA', 'NY', 'TX', 'FL', 'IL'][Math.floor(Math.random() * 5)]);
        locators.zipCode().type(DataGenerator.generateRandomZipCode());
        locators.phoneNumber().type(DataGenerator.generateRandomPhoneNumber());
        locators.ssn().type(DataGenerator.generateRandomSSN());
        locators.username().type(`user_${Date.now()}`); 
        locators.password().type(`Passw0rd!`);
        locators.repeatedPassword().type(`Passw0rd!`);
        locators.submitButton().click();
    }
}

export const Registration = new RegistrationMethods();
