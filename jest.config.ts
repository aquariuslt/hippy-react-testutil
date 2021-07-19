import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverageFrom: [
    '<rootDir>/src/*.ts',
    '!<rootDir>/src/__tests__/**/*.ts'
  ],
  testMatch: [
    '<rootDir>/src/**/*.test.ts'
  ],
  testEnvironment: 'node',
  coverageDirectory: '<rootDir>/reports/coverage'
};


export default config;
