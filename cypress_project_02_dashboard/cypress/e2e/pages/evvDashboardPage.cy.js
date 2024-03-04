/// <reference types="cypress"/>

export class EvvDashboardPage{

    change_aggregation_type(){
        cy.contains('Monthly').click();

        cy.get('body').should(($body) => {
            expect($body.attr('style')).to.include('cursor: wait;');
          });

        cy.get('body').should(($body) => {
            expect($body.attr('style')).to.not.include('cursor: wait;');
          });
    }

    change_view_analytics(){

        // cy.get('[id^=saw_]')
        // .filter('.VSelDropDown')
        cy.get('.VSelDropDown')
        .each($el => {
            cy.wrap($el).select('Table'); 

            cy.wrap($el).parent().closest('.CVFormatTable').then($table => {
                cy.wrap($table).find('.ViewContainer[viewType="tableView"], .ViewContainer[viewType="pivotTableView"]', {timeout: 120000}).should('exist');
              });
          });
    }

    change_subtab(subtab_string){
        cy.get(subtab_string).click();
    }

    change_tab(tab_string){
        
    }

}