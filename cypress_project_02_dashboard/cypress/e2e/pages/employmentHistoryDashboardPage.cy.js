/// <reference types="cypress"/>

export class EmploymentHistoryDashboardPage {


    changeFromDateAndToDate() {

    }

    change_view_analytics() {

        cy.get('[id^=saw_]')
            .filter('.VSelDropDown')
            .each($el => {
                cy.wrap($el).select('Table');
                
                cy.wrap($el).parent().closest('.CVFormatTable').then($table => {
                    cy.wrap($table).find('.ViewContainer[viewType="tableView"], .ViewContainer[viewType="pivotTableView"]').should('be.visible');
                  });
            });

    }

}