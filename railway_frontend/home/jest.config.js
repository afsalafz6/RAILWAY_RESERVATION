module.exports = {
    moduleNameMapper: {
      "\\.(css|sass)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: [ require.resolve('regenerator-runtime/runtime') ],
    testEnvironment: 'jsdom'
  }
