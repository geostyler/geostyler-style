module.exports = {
  collectCoverageFrom: [
    '<rootDir>/test/typeguards.ts'
  ],
  testMatch: [
    '<rootDir>/test/typeguards.spec.ts'
  ],
  transform: {
    '^.+\\.ts': '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ]
};
