/// <reference types="cypress"/>

export class EmploymentHistoryDashboardPage {


    changeFromDateAndToDate() {

    }

    change_aggregation_type(){
        cy.contains('Monthly').click();

        cy.get('body').should(($body) => {
            expect($body.attr('style')).to.include('cursor: wait;');
          });

        cy.get('body').should(($body) => {
            expect($body.attr('style')).to.not.include('cursor: wait;');
          });

        cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');
    }

    change_view_analytics() {

        cy.get('.VSelDropDown')
            .each($el => {
                cy.wrap($el).select('Table');
                
                cy.wrap($el).parent().closest('.CVFormatTable').then($table => {
                    cy.wrap($table).find('.ViewContainer[viewType="tableView"], .ViewContainer[viewType="pivotTableView"]', {timeout : 300000 }).should('exist', {timeout : 300000 });
                  });
            });

    }

    change_subtab(subtab_string){
        cy.get(subtab_string).click();
    }

}