/// <reference types="cypress" />

import { HomePage } from './pages/homepage.cy';
import { GerDashboardPage } from './pages/gerDashboardPage.cy';
import { EvvDashboardPage } from './pages/evvDashboardPage.cy';
import { CaseManagementDashboardPage } from './pages/caseManagementDashboardPage.cy';
import { DemographicDashboardPage } from './pages/demographicDashboard.cy';
import { EmploymentHistoryDashboardPage } from './pages/employmentHistoryDashboardPage.cy';

const homepage = new HomePage()
const gerDashboardPage = new GerDashboardPage();
const evvDashboardPage = new EvvDashboardPage();
const caseManagementDashboardPage = new CaseManagementDashboardPage();
const demographicDashboardPage = new DemographicDashboardPage();
const employmentHistoryDashboardPage = new EmploymentHistoryDashboardPage();

const aggregationType = "monthly";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Cypress.on('window:before:unload', (options) => {
//     const logs = options.get('logs');
//     logs.forEach((log) => {
//       if (log.displayName === 'xhr' || log.displayName === 'fetch') {
//         log.hidden = true;
//         console.log('Hidden:', log.hidden, log.displayName); // Check the value
//       }
//     });
//   });

// Cypress.on('log:changed', (log) => {

//   if (
//     log.displayName === 'xhr' 
//   // || 
//   // log.displayName === 'fetch'
//   ) {
//     return; // Prevent the log from being displayed
//   }
// });





describe('OAS Demo', () => {

  beforeEach('before each', function(){
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  })

  it('Testing GER Dashboard', () => {


    cy.visit('http://bdoas07.therapbd.net:9502/analytics/saw.dll?bieehome&NQUser=wasif@MULTI-TH&NQPassword=6080ada2354331367a8b5013105e9648');


    homepage.selectGERDashboard();
    // homepage.selectEVVDashboard();
    // homepage.select_case_management_dashboard();
    // homepage.select_demographic_dashboard();
    // homepage.select_employment_history_dashboard();

    // gerDashboardPage.changeAggregationType(aggregationType);

    // cy.wait(3000);

    cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');

    // gerDashboardPage.changeFromDateAndToDate();

    // evvDashboardPage.change_aggregation_type();
    gerDashboardPage.change_aggregation_type();
    // caseManagementDashboardPage.change_aggregation_type();
    // demographicDashboardPage.change_aggregation_type();
    // employmentHistoryDashboardPage.change_aggregation_type();



    // cy.wait(1000);

    gerDashboardPage.change_view_analytics();
    // evvDashboardPage.change_view_analytics();
    // caseManagementDashboardPage.change_view_analytics();
    // demographicDashboardPage.change_view_analytics();
    // employmentHistoryDashboardPage.change_view_analytics(); 
    
    /* traverse through all the subtabs in a particular tab */
    
    const starting_subtab_index = 1;
    const ending_subtab_index = 3;

    for(let i=starting_subtab_index; i<=ending_subtab_index; i++){

      let subtab_string = '#dashboard_subpage_' + i + '_tab > tbody > tr > td > div';

      // evvDashboardPage.change_subtab(subtab_string);
      gerDashboardPage.change_subtab(subtab_string);
      // caseManagementDashboardPage.change_subtab(subtab_string);
      // demographicDashboardPage.change_subtab(subtab_string);
      // employmentHistoryDashboardPage.change_subtab(subtab_string);

      cy.get('body').should(($body) => {
        expect($body.attr('style')).to.not.include('cursor: wait;');
      });

      cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');

      // evvDashboardPage.change_aggregation_type();
      gerDashboardPage.change_aggregation_type();
      // caseManagementDashboardPage.change_aggregation_type();
      // demographicDashboardPage.change_aggregation_type();
      // employmentHistoryDashboardPage.change_aggregation_type();

      // evvDashboardPage.change_view_analytics();
      gerDashboardPage.change_view_analytics();
      // caseManagementDashboardPage.change_view_analytics();
      // demographicDashboardPage.change_view_analytics();
      // employmentHistoryDashboardPage.change_view_analytics();
    }

  })

})