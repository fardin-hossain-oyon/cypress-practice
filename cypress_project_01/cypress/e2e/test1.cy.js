/// <reference types="cypress">

it('Google Search', () => { 
    cy.visit('https://google.com');

    cy.get('.SDkEP').type('Automation Step by Step{Enter}');

    // cy.get('.SDkEP_lolxd', {timeout:10000}).type('Automation Step by Step{Enter}');

    cy.wait(2000);

    cy.contains('Change to English').click();

    cy.wait(2000)

    cy.contains('Images').click();

    // cy.get('[href="/search?sca_esv=3ea22870838a501c&q=Automation+Step+by+Step&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiU-uatg4eEAxXlbGwGHW1TD28Q0pQJegQICRAB"] > .GKS7s > .FMKtTb')

    // cy.contains('Google Search').click();
})