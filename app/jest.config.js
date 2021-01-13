module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  transform: { '\\.svg$': '<rootDir>/__mocks__/fileTransform.js' },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/App.tsx',
    '!src/assets/styles/*.{ts,tsx}',
    '!src/**/*.query.ts',
    '!src/**/*.model.ts',
    '!src/router/*.{ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/path/to/dir/',
  ],
  setupFilesAfterEnv: ['./setupJest.ts'],
};
