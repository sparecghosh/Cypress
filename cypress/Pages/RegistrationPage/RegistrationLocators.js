export const RegistrationPageLocators = {

       firstName: () =>  cy.get('input[name="customer.firstName"]'),
       lastName: () => cy.get('input[name="customer.lastName"]'),
       street: () => cy.get('input[name="customer.address.street"]'),
       city: () => cy.get('input[name="customer.address.city"]'),
       state: () => cy.get('input[name="customer.address.state"]'),
       zipCode: () => cy.get('input[name="customer.address.zipCode"]'),
       phoneNumber: () => cy.get('input[name="customer.phoneNumber"]'),
       ssn: () => cy.get('input[name="customer.ssn"]'),
       username: () => cy.get('input[name="customer.username"]'),
       password: () => cy.get('input[name="customer.password"]'),
       repeatedPassword: () => cy.get('input[name="repeatedPassword"]'),
       submitButton: () => cy.get('#customerForm input[type="submit"]'),
    };
