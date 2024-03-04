/// <reference types="cypress"/>

export class GerDashboardPage{

    yearly_radio_locator = '#saw_813213_a_1_o0';
    monthly_radio_locator = '#saw_813213_a_1_o1';

    from_date_dropdown_locator = '#saw_815317_b_1_dropdownIcon';
    from_date_option_locator = '[title="06/01/2020"] > .promptMenuOptionText';

    to_date_dropdown_locator = '#saw_815317_c_1_dropdownIcon';
    to_date_option_locator = '[title="08/31/2022"] > .promptMenuOptionText';

    apply_button_locator = '#gobtn'

    

    changeFromDateAndToDate(){

    }

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

        cy.get('[id^=saw_]')
        .filter('.VSelDropDown')
        .each($el => {
            cy.wrap($el).select('Table');

            cy.wrap($el).parent().closest('.CVFormatTable').then($table => {
                cy.wrap($table).find('.ViewContainer[viewType="tableView"], .ViewContainer[viewType="pivotTableView"]').should('be.visible');
              });

          });
    }

    applyFilter(){
        cy.get(this.apply_button_locator).click();
    }

}