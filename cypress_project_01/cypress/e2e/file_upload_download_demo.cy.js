/// <reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>

it('File upload demo', function(){
    cy.visit('https://trytestingthis.netlify.app/');

    cy.get('#myfile').attachFile('example.json');

    /* if the file is in the fixtures folder, the file can be directly referenced using name */
    /* if the file is within the project folder, relative path should be given */
    /* if the file is anywhere outside the project folder, the absolute path should be given */
});

it('File download demo', function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
});