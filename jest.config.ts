import nextJest from 'next/jest'

const createJestConfig = nextJest()

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/'],
}

module.exports = createJestConfig(customJestConfig)
