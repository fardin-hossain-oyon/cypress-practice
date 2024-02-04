/// <reference types="cypress"/>

it('Google Search', () => { 
    cy.visit('https://google.com');

    cy.get('.SDkEP').type('Automation Step by Step{Enter}');

    // cy.get('.SDkEP_lolxd', {timeout:10000}).type('Automation Step by Step{Enter}');

    // cy.wait(2000);

    cy.contains('Change to English').click();

    // cy.wait(2000);

    cy.contains('Images').click();

    // cy.contains('Google Search').click();
})