/// <reference types="cypress"/>

export class EvvDashboardPage{


    changeFromDateAndToDate(){
        // cy.get(this.from_date_dropdown_locator).click();
        // cy.get(this.from_date_option_locator).click();

        // cy.get(this.to_date_dropdown_locator).click();
        // cy.get(this.to_date_option_locator).click();

        // cy.get('#saw_821299_7_1').scrollIntoView().click();
        // cy.contains('/01/').click({ force: true });
        // cy.get('#saw_821299_7_1', {timeout:10000}).click();

        // cy.get('#saw_829341_7_1_dropdownIcon', {timeout:20000}).click();

        // cy.contains('04/01/2020', {timeout:20000}).click();
        // cy.get('[title="06/01/2020"]').click();
        // cy.get('[id^=saw_][id$=_dropdownIcon]').click();

    }

    change_view_analytics(){

        // cy.get('[id^=saw_][id$=_26]').click();
        // cy.get('[id^=saw_][id$=_2a]').select('Table');
        // cy.get('[id^=saw_][id$=_2a]').select('Table');
        // cy.get('[id^=saw_][id$=_30]').select('Table');
        // cy.get('[id^=saw_][id$=_36]').select('Table');
        // cy.get('[id^=saw_][id$=_3c]').select('Table');
        // cy.get('[id^=saw_][id$=_42]').select('Table');
        // cy.get('[id^=saw_][id$=_48]').select('Table');
        // cy.get('[id^=saw_][id$=_55]').select('Table');

        // let total_dropdown_count = 0;

        let total_table_count = 0;

        cy.get('[id^=saw_]')
        .filter('.VSelDropDown')
        .each($el => {
            // Check if applying select makes sense in this context
            cy.wrap($el).select('Table'); // Apply select to each element
            // cy.wait(1000);
            // cy.wrap($el).parent().next().should('have.class', 'PivotContainer');

            const parentTr = $el.parent().closest('tr');
            const prevTr = parentTr.closest('tr');
            // const nextSibling = prevTr.next('tr');
            const closestSiblingTr = prevTr.closest('table').find('tr').not(prevTr).first();



            cy.log(parentTr);
            cy.log(prevTr);
            cy.log(closestSiblingTr);

            cy.wrap(closestSiblingTr).wait(5000).should('contain.descendant', '.ViewContainer[viewType="pivotTableView"]');

        
          });

    }

}