module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    "src/components/Header.tsx",
    "src/components/Badge.tsx",
    "src/components/ProfileCard.tsx",
    "src/components/QuoteBox.tsx",
    "src/components/TaskList.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
