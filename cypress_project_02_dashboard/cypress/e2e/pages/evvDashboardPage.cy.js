/// <reference types="cypress"/>

export class EvvDashboardPage{

    change_aggregation_type(){
        cy.contains('Monthly').click();
    }

    change_view_analytics(){

        cy.get('[id^=saw_]')
        .filter('.VSelDropDown')
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