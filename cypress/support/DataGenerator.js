// Utility functions for generating test data
export class DataGenerator {
    static generateRandomString(length = 8) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    static generateRandomNumber(min = 1000, max = 9999) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static generateRandomPhoneNumber() {
        const areaCode = this.generateRandomNumber(200, 999);
        const exchange = this.generateRandomNumber(200, 999);
        const number = this.generateRandomNumber(1000, 9999);
        return `${areaCode}-${exchange}-${number}`;
    }

    static generateRandomSSN() {
        const area = this.generateRandomNumber(100, 999);
        const group = this.generateRandomNumber(10, 99);
        const serial = this.generateRandomNumber(1000, 9999);
        return `${area}-${group}-${serial}`;
    }

    static generateRandomZipCode() {
        return this.generateRandomNumber(10000, 99999).toString();
    }

    static generateRandomUser(baseName = 'testuser') {
        const timestamp = Date.now();
        const randomSuffix = this.generateRandomString(4);
        
        return {
            firstName: `Test${this.generateRandomString(5)}`,
            lastName: `User${this.generateRandomString(5)}`,
            street: `${this.generateRandomNumber(100, 9999)} Test Street`,
            city: `TestCity${this.generateRandomString(3)}`,
            state: ['CA', 'NY', 'TX', 'FL', 'IL'][Math.floor(Math.random() * 5)],
            zipCode: this.generateRandomZipCode(),
            phoneNumber: this.generateRandomPhoneNumber(),
            ssn: this.generateRandomSSN(),
            username: `${baseName}_${timestamp}_${randomSuffix}`,
            password: `TestPass${this.generateRandomNumber(100, 999)}`,
            get repeatedPassword() {
                return this.password;
            }
        };
    }

    /**
     * Generates an array of random user objects.
     *
     * @param {number} [count=3] - The number of users to generate.
     * @param {string} [baseName='testuser'] - The base name to use for each user.
     * @returns {Array<Object>} An array of generated user objects.
     */
    static generateMultipleUsers(count = 3, baseName = 'testuser') {
        const users = [];
        for (let i = 0; i < count; i++) {
            users.push(this.generateRandomUser(`${baseName}${i + 1}`));
        }
        return users;
    }
}

// US States array for reference
export const US_STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

// Common test data patterns
export const TEST_DATA_PATTERNS = {
    invalidEmails: [
        'invalid-email',
        '@invalid.com',
        'test@',
        'test@.com',
        ''
    ],
    invalidPhoneNumbers: [
        '123',
        'abc-def-ghij',
        '000-000-0000',
        ''
    ],
    invalidZipCodes: [
        '123',
        'abcde',
        '000000',
        ''
    ]
};