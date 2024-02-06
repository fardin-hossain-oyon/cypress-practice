/// <reference types="cypress"/>


import { LoginPage } from "./pages/login_pages";

const loginPage = new LoginPage()

const username = 'Admin'
const password = 'admin123'


describe('All login tests', () => {

    /* this function will be executed at the start of each function */

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    // it.only('Login test 1', () => {      // only executes the first test
    // it.skip('Login test 1', () => {      // skips executing the first test
    it('Login test 1', () => {

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
        loginPage.clickLogIn();
        cy.get('.oxd-userdropdown-tab').click();
    })
    
    
    
    it('Login test 2', () => {
    
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
        loginPage.enterUsername('sadadasdad');      // wrong credentials
        loginPage.enterPassword(password);
        loginPage.clickLogIn();
        cy.get('.oxd-userdropdown-tab').click();
    })
})


/* any tests written outside the describe box will be executed first, before the tests within describe box */

it('Login test outside the describe box', () => {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    loginPage.enterUsername('sadadasdad');      // wrong credentials
    loginPage.enterPassword(password);
    loginPage.clickLogIn();
    cy.get('.oxd-userdropdown-tab').click();
})