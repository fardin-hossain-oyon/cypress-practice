// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Cypress.on('window:before:unload', (options) => {
//     const logs = options.get('logs');
//     logs.forEach((log) => {
//       if (log.displayName === 'xhr' || log.displayName === 'fetch') {
//         log.hidden = true;
//         console.log('Hidden:', log.hidden, log.displayName); // Check the value
//       }
//     });
//   });