import { RegistrationPageLocators } from "./RegistrationLocators";
import { DataGenerator } from "../../support/DataGenerator";

export class RegistrationMethods {
    constructor() {
        this.testData = {};
    }

    setData(key, value) {
        this.testData[key] = value;
    }

    getData(key) {
        return this.testData[key];
    }

    fillRegistrationForm(overrides = {}) {
        const data = DataGenerator.createUserData(overrides);
        this.setData('registration', data);

        RegistrationPageLocators.firstName().clear().type(data.firstName);
        RegistrationPageLocators.lastName().clear().type(data.lastName);
        RegistrationPageLocators.street().clear().type(data.street);
        RegistrationPageLocators.city().clear().type(data.city);
        RegistrationPageLocators.state().clear().type(data.state);
        RegistrationPageLocators.zipCode().clear().type(data.zipCode);
        RegistrationPageLocators.phoneNumber().clear().type(data.phoneNumber);
        RegistrationPageLocators.ssn().clear().type(data.ssn);
        RegistrationPageLocators.username().clear().type(data.username);
        RegistrationPageLocators.password().clear().type(data.password);
        RegistrationPageLocators.repeatedPassword().clear().type(data.password);

        RegistrationPageLocators.submitButton().click();

        return this;
    }

    getRegistrationData() {
    return this.getData('registration');
  }
}

export const Registration = new RegistrationMethods();
