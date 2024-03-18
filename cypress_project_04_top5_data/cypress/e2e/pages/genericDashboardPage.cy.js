/// <reference types="cypress"/>

export class GenericDashboardPage {


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

        const checkStability = () => {
        cy.get('body').then(($body) => {
            const initialHtml = $body.html();
            cy.wait(2000, {log : false}); // Adjust wait time as needed
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

    change_analysis_view_to_table() {

        cy.get('.VSelDropDown')
            .each($el => {

                cy.wrap($el).select('Table');

                // cy.wrap($el).select('Pivot Table');

                cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');

                cy.get('body').should(($body) => {
                    expect($body.attr('style')).to.not.include('cursor: wait;');
                  });
                
                cy.wrap($el).parent().closest('.CVFormatTable').then($table => {
                    cy.wrap($table).find('.ViewContainer[viewType="tableView"], .ViewContainer[viewType="pivotTableView"]', {timeout : 300000 }).should('exist', {timeout : 300000 });
                  });
        });

        
    }

    change_subtab(subtab_string){
        cy.get(subtab_string).click();
    }

    find_top_five_data(){

        let parentIds = [];
        let number_values = [];
        let index_values =[];

        cy.get('.PTChildPivotTable')
        .each($el => {

            let parentIds_in_particular_table = [];
            let number_values_in_particular_table = [];
            let index_values_in_particular_table = [];

            cy.wrap($el).find('.PTL')
            .each(($childEl, index) => {
                const childText = $childEl.text();

                if (!/[a-zA-Z%]/.test(childText) && childText.trim() != ''){

                    const parentElement = $childEl.parent(); // Get the parent element
                    const parentId = parentElement.attr('id'); // Extract the parent's ID
                    // parentIds.push(parentId);
                    // number_values.push(childText);
                    parentIds_in_particular_table.push(parentId);
                    number_values_in_particular_table.push(childText);
                    index_values_in_particular_table.push(index);
                }
              })
              .then(()=>{

                const sortedData = number_values_in_particular_table.map((num, index) => ({
                    number: parseInt(num.replace(',', ''), 10),
                    parentId: parentIds_in_particular_table[index],
                    idx: index_values_in_particular_table[index],
                  })).sort((a, b) => {
                    if (a.number !== b.number) {
                      return b.number - a.number;
                    }
                    return a.parentId.localeCompare(b.parentId);
                  });

                const sortedNumbers = sortedData.map(item => item.number);
                const sortedParentIds = sortedData.map(item => item.parentId);
                const sortedIndices = sortedData.map(item => item.idx);

                sortedNumbers.splice(5);
                sortedParentIds.splice(5);
                sortedIndices.splice(5);
  
                parentIds.push(sortedParentIds);
                number_values.push(sortedNumbers);
                index_values.push(sortedIndices);

                // for(let i = 0; i<5; i++){
                //     cy.wrap($el).get('.PTL').eq(sortedIndices[i]).click();
                //     cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');
                //     cy.get('.masterBreadCrumbItem').click();
                // }
            })
        })
        .then(()=>{
            // cy.log(parentIds);
            // cy.log(number_values);
            // cy.log(index_values);

            cy.get('.PTChildPivotTable')
            .each(($el, index) => {
                 
                cy.log($el);

                cy.log(index);

                for (let i = 0; i < index_values[index].length; i++) {
                    cy.get('.PTChildPivotTable').eq(index)
                    .within(() => {
                        cy.get('.PTL').eq(index_values[index][i]).click();
                    });
                    cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');
                    cy.get('.masterBreadCrumbItem').click();
                }

            });
        })
        ;
    }

}