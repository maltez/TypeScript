module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/application/services/**/*.{js}',
        '!**/node_modules/**',
    ],
    testMatch: ['<rootDir>/tests/**/*.test.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    roots: [
        './',
    ],
};
