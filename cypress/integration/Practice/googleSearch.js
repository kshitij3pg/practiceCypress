/// <reference types="cypress" />

describe('Searching on google',()=>{
    beforeEach(()=>{
        cy.visit('https://www.google.com')
    })
    it('Search cypress',()=>{
        cy.get('input[name="q"]').type('cypress.io{enter}');
        //cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3').click();
        cy.contains("JavaScript End to End Testing Framework | cypress.io testing ...").click();
    })
})

