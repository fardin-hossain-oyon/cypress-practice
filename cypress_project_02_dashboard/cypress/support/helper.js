const filterLogs = () => {
    const isUiMode = Cypress.config('isInteractive');
    if (isUiMode) {
        const filteredLogTypes = ['fetch', 'xhr'];
        const origLog = Cypress.log;
        Cypress.log = function (opts, ...other) {
            if (filteredLogTypes.includes(opts.displayName)) {
                return;
            }
            return origLog(opts, ...other);
        };
    }
};