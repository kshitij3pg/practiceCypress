/// <reference types="cypress" />

describe('Fill form in Demo QA website',()=>{
    it('Open Demo QA website',()=>{
        cy.visit('https://demoqa.com/');
    })
    it('Click on Forms Card',()=>{
        cy.contains("Forms").click();
    })
    it('Click on practice form',()=>{
        cy.contains('Practice Form').click();
    })
    it('Fill form',()=>{
        cy.get("input[id='firstName']").type('Kshitij')
        cy.get("input[id='lastName']").type('Kumar')
        cy.get("input[id='userEmail']").type('kshitij27kumar@gmail.com')
      //  cy.get("label[id='gender-radio-1']").check();
        cy.get("input[id='userNumber']").type('8529190627');
        //cy.get("input[id='dateOfBirthInput']").type('06 Nov 2022{enter}');
        cy.get("input[id='subjectsInput']").type('Data Structure and Algorithms');
        cy.get("textarea[id='currentAddress']").type('House No. 3, Vaishali Enclave, Civil Lines, Satna, MP',{force: true});
    })
})