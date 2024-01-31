it('Assertion Demo', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();
  })