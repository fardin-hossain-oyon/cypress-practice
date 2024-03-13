/// <reference types="cypress"/>

export class HomePage{

    // dashboard_dropdown_locator = '#dashboard > .HeaderMenuBarText > span';
    // ger_dashboard_option_locator = '[aria-label="GER Dashboard for Oversight"]'



    selectGERDashboard(){
        cy.get('#dashboard > .HeaderMenuBarText > span').click();
        cy.get('[aria-label="GER Dashboard for Oversight"]').click();
    }

    selectEVVDashboard(){
        cy.get('#dashboard > .HeaderMenuBarText > span').click();
        cy.get('[aria-label="EVV Dashboard for Oversight"]').click();
    }

    select_case_management_dashboard(){
        cy.get('#dashboard > .HeaderMenuBarText > span').click();
        cy.get('[aria-label="Case Management Dashboard for Oversight"]').click();
    }

    select_demographic_dashboard(){
        cy.get('#dashboard > .HeaderMenuBarText > span').click();
        // cy.get('[aria-label="Demographic Dashboard for Oversight"]').click();
        cy.get('div[foldername="Demographic Dashboard for Oversight"] > .HeaderPortalsList > .HeaderPortalLink').click();
    }

    select_employment_history_dashboard(){
        cy.get('#dashboard > .HeaderMenuBarText > span').click();
        cy.get('[aria-label="Employment History Dashboard for Oversight"]').click();
    }

}