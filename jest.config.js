/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: [
    "**/__tests__/a3-*.test.js",
    "**/__tests__/a3-*.test.ts",
    "**/__tests__/a3-*.test.tsx",
  ],
  modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
};
