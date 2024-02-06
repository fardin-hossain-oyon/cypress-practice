/// <reference types="cypress"/>

it('Assertion Demo', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();

    /* implicit assertions */

    /* 'should' clause */

    // cy.get('#query-btn')
    //   .should('contain', 'Button')
    //   .should('have.class', 'query-btn')
    //   .should('be.visible')
    //   // .should('be.disabled')
    //   .should('be.enabled')
    ;

    cy.get('#query-btn')
      .should('contain', 'Button')
      .and('have.class', 'query-btn')
      .and('be.visible')
      // .should('be.disabled')
      .and('be.enabled')
    ;


    /* explicit assertions */

    /* 'expect' clause */

    expect(true).to.be.true;
    // expect(false).to.be.true;

    let name = 'Fardin Hossain';
    expect(name).to.be.equal('Fardin Hossain');
    expect(name).to.not.equal('Md Kamrujjaman');
    expect(name).to.be.a('string');
    // expect(name).to.be.a('number');


    /* 'assert' clause */

    assert.equal(4, '4', 'equal');        // passes
    assert.equal(4, 4, 'equal');          // passes
    assert.strictEqual(4, 4, 'equal');    // passes
    // assert.strictEqual(4, '4', 'equal');  // fails (4 and '4' are different data types)


  })