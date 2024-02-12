/// <reference types="cypress"/>

export class GerDashboardPage{

    yearly_radio_locator = '#saw_813213_a_1_o0';
    monthly_radio_locator = '#saw_813213_a_1_o1';

    from_date_dropdown_locator = '#saw_815317_b_1_dropdownIcon';
    from_date_option_locator = '[title="06/01/2020"] > .promptMenuOptionText';

    to_date_dropdown_locator = '#saw_815317_c_1_dropdownIcon';
    to_date_option_locator = '[title="08/31/2022"] > .promptMenuOptionText';

    apply_button_locator = '#gobtn'

    changeAggregationType(aggregationType){

        if(aggregationType === "yearly"){
            cy.get(this.yearly_radio_locator).click();
        }
        else{
            // cy.get(this.monthly_radio_locator).click();
            cy.contains('Monthly').click();
        }
    }

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
        cy.get('[id^=saw_][id$=_dropdownIcon]').click();

    }

    applyFilter(){
        cy.get(this.apply_button_locator).click();
    }

}