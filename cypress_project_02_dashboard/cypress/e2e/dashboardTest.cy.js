/// <reference types="cypress" />

import { HomePage } from './pages/homepage.cy';
import { GerDashboardPage } from './pages/gerDashboardPage.cy';

const homepage = new HomePage()
const gerDashboardPage = new GerDashboardPage();

const aggregationType = "monthly";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('OAS Demo', () => {

  it('Testing GER Dashboard', () => {

    cy.visit('http://bdoas07.therapbd.net:9502/analytics/saw.dll?bieehome&NQUser=mostafiz@MULTI-TH&NQPassword=6080ada2354331367a8b5013105e9648');

    homepage.selectGERDashboard();

    gerDashboardPage.changeAggregationType(aggregationType);

    // cy.wait(10000);

    gerDashboardPage.changeFromDateAndToDate();
    

  })

})