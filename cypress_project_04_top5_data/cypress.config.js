const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    hideCommandLog: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('before:browser:launch', (browser = {}, launchOptions) => {
      //   launchOptions.args.push('--disable-dev-tools'); // Disable dev tools for all browsers
      //   return launchOptions;
      // });
    },
    defaultCommandTimeout : 60000
  },
});
