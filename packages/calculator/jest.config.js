module.exports = {
    preset: "ts-jest",
    globals: {
        'ts-jest': {
            tsConfig: 'packages/calculator/tsconfig.test.json'
        }
    },
    moduleNameMapper: {
        "@jeroen/(.*)": "<rootDir>/../$1/src"
    },
};