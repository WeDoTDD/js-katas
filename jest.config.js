module.exports = {
	rootDir: '.',
	verbose: true,
	testMatch: ['<rootDir>/src/Katas/**/?(*.)+(spec).[jt]s'],
	transform: { '^.+\\.ts$': '<rootDir>/node_modules/ts-jest' },
	moduleDirectories:['node_modules'],
	transformIgnorePatterns: ['/node_modules/'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleFileExtensions: ['ts', 'js'],
	testEnvironment: 'node',
	testTimeout: 2000,
};