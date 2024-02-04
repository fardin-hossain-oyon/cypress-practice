/// <reference types="cypress"/>


before(function(){
    cy.fixture('example.json').as('test_data');
})

it('Read write file demo', function(){
    // cy.fixture('example.json').then((data) => {
    //     cy.log(data.name);
    //     cy.log(data.email);
    //     cy.log(data.body);
    // })

    cy.log(this.test_data.name);
})


it('Read file using readFile() function', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.email);
        cy.log(data.name);
        cy.log(data.log);
    });
})



it('Write file demo', function(){
    cy.writeFile('sample.txt', 'Hello I am under the water. Please help me. Here very much raining uuuuuuuu');
    cy.writeFile('sample.txt', 'I learnt this stuff rom instagram reels', {flag:'a+'})
})






