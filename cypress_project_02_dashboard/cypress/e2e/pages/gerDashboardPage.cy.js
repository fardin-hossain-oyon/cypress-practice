/// <reference types="cypress"/>

function waitForStablePage(attempts = 0) {
    if (attempts >= 5) {
      throw new Error('Page stability not achieved after 5 attempts');
    }
  
    cy.get('body').as('htmlBody');
    return cy.get('@htmlBody').should(($body) => {
      const hasWaitCursor = $body.attr('style')?.includes('cursor: wait;');
      if (!hasWaitCursor) {
        return; // Success, no wait cursor present
      }
      
      // Wait for a short duration and retry if wait cursor is still present
      cy.wait(500);
      return waitForStablePage(attempts + 1); // Recursive call
    });
  }


export class GerDashboardPage{
    

    changeFromDateAndToDate(){

    }

    change_aggregation_type(){
        cy.contains('Monthly').click();

        // waitForStablePage();

        // cy.get('body').as('htmlBody');
        // cy.get('@htmlBody').should(($body) => {
        //     expect($body.attr('style')).to.not.include('cursor: wait;'); // Assert final absence
        // });

        // cy.get('body').as('htmlBody');
        // cy.get('@htmlBody').should('not.have.css', 'cursor', 'wait', { timeout: 10000, interval: 1000 });

        // cy.wait(5000);



        cy.get('body'). as('htmlBody');
        cy.get('@htmlBody').should(($body) => {
            expect($body.attr('style')).to.include('cursor: wait;');
        });

        cy.get('body'). as('htmlBody');
        cy.get('@htmlBody').should(($body) => {
            expect($body.attr('style')).to.not.include('cursor: wait;');
        });


        const checkStability = () => {
            cy.get('body').then(($body) => {
                const initialHtml = $body.html();
                cy.wait(500, {log : false}); // Adjust wait time as needed
                cy.get('body').then(($updatedBody) => {
                    const updatedHtml = $updatedBody.html();
                    if (initialHtml !== updatedHtml) {
                        checkStability();
                    }
                });
            });
        };

        checkStability();

        cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');
    }


    change_view_analytics(){

        cy.get('.VSelDropDown')
        .each($el => {

            if (!$el.attr('selected')){
                cy.wrap($el).select('Table');

                cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');

                cy.wrap($el).parent().closest('.CVFormatTable').then($table => {
                    cy.wrap($table).find('.ViewContainer[viewType="tableView"], .ViewContainer[viewType="pivotTableView"]', {timeout : 300000 }).should('exist', {timeout : 300000 });
                });
            }

          });
    }

    change_subtab(subtab_string){
        cy.get(subtab_string).click();
    }

    applyFilter(){
        cy.get(this.apply_button_locator).click();
    }

}