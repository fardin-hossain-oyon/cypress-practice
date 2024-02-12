/// <reference types="cypress"/>

export class HomePage{

    dashboard_dropdown_locator = '#dashboard > .HeaderMenuBarText > span';
    ger_dashboard_option_locator = '[aria-label="GER Dashboard for Oversight"]'

    selectGERDashboard(){
        cy.get(this.dashboard_dropdown_locator).click();
        cy.get(this.ger_dashboard_option_locator).click();
    }

}