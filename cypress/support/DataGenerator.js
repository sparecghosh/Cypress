// 📁 cypress/support/DataGenerator.js
import { faker } from '@faker-js/faker';

export const DataGenerator = {
  createUserData(overrides = {}) {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number('###-###-####'),
      ssn: faker.string.numeric(9),
      username: 'user_' + faker.string.uuid(),
      password: faker.internet.password({ length: 12, memorable: false, pattern: /[A-Za-z0-9]/ }),
      ...overrides,
    };
  },
};
