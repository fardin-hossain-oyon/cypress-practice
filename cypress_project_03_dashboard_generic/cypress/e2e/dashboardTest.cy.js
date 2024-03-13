/// <reference types="cypress" />

import { HomePage } from './pages/homepage.cy';
// import { GerDashboardPage } from './pages/gerDashboardPage.cy';
// import { EvvDashboardPage } from './pages/evvDashboardPage.cy';
// import { CaseManagementDashboardPage } from './pages/caseManagementDashboardPage.cy';
// import { DemographicDashboardPage } from './pages/demographicDashboard.cy';
// import { EmploymentHistoryDashboardPage } from './pages/employmentHistoryDashboardPage.cy';
import { GenericDashboardPage } from './pages/genericDashboardPage.cy';

const homepage = new HomePage();
// const gerDashboardPage = new GerDashboardPage();
// const evvDashboardPage = new EvvDashboardPage();
// const caseManagementDashboardPage = new CaseManagementDashboardPage();
// const demographicDashboardPage = new DemographicDashboardPage();
// const employmentHistoryDashboardPage = new EmploymentHistoryDashboardPage();
const genericDashboardPage = new GenericDashboardPage();

const aggregationType = "monthly";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('OAS Demo', () => {

  beforeEach('before each', function(){
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  })

  it('Testing Dashboard Traversal', () => {


    cy.visit('http://bdoas07.therapbd.net:9502/analytics/saw.dll?bieehome&NQUser=wasif@MULTI-TH&NQPassword=6080ada2354331367a8b5013105e9648');


    // homepage.selectEVVDashboard();
    // homepage.selectGERDashboard();
    homepage.select_case_management_dashboard();
    // homepage.select_demographic_dashboard();
    // homepage.select_employment_history_dashboard();

    cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');

    genericDashboardPage.change_aggregation_type();

    genericDashboardPage.change_analysis_view_to_table();
    
    /* traverse through all the subtabs in a particular tab */
    
    const starting_subtab_index = 1;
    const ending_subtab_index = 3;

    for(let i=starting_subtab_index; i<=ending_subtab_index; i++){

      let subtab_string = '#dashboard_subpage_' + i + '_tab > tbody > tr > td > div';

      genericDashboardPage.change_subtab(subtab_string);

      cy.get('.ProgressIndicatorDiv', {timeout : 300000}).should('not.exist');

      genericDashboardPage.change_aggregation_type();

      genericDashboardPage.change_analysis_view_to_table();
    }

  })

})