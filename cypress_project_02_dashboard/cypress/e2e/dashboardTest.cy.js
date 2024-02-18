/// <reference types="cypress" />

import { HomePage } from './pages/homepage.cy';
import { GerDashboardPage } from './pages/gerDashboardPage.cy';
import { EvvDashboardPage } from './pages/evvDashboardPage.cy';
import { CaseManagementDashboardPage } from './pages/caseManagementDashboardPage.cy';

const homepage = new HomePage()
const gerDashboardPage = new GerDashboardPage();
const evvDashboardPage = new EvvDashboardPage();
const caseManagementDashboardPage = new CaseManagementDashboardPage();

const aggregationType = "monthly";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});





describe('OAS Demo', () => {

  beforeEach('before each', function(){
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  })

  it('Testing GER Dashboard', () => {

    // cy.intercept({ resourceType: 'xhr' }, { log: false }) 
    // cy.intercept({ resourceType: 'GET' }, { log: false }) 
    // cy.intercept({ resourceType: 'xhr' }, { log: false }) 

    cy.visit('http://bdoas07.therapbd.net:9502/analytics/saw.dll?bieehome&NQUser=mostafiz@MULTI-TH&NQPassword=6080ada2354331367a8b5013105e9648');


    // homepage.selectGERDashboard();
    // homepage.selectEVVDashboard();
    homepage.select_case_management_dashboard();

    // gerDashboardPage.changeAggregationType(aggregationType);

    // cy.wait(10000);

    // gerDashboardPage.changeFromDateAndToDate();

    // cy.wait(10000);

    // gerDashboardPage.change_view_analytics();
    // evvDashboardPage.change_view_analytics();
    caseManagementDashboardPage.change_view_analytics();


    // cy.wait(10000);
    

  })

})