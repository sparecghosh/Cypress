describe('google Search', ()=>{
  it('Launch Google', ()=>{
    cy.visit('http://www.google.com');
    cy.get("#W0wltc .sy4vM").click();
    //cy.get('input[name="q"]').should('be.visible');
  })

  it('Search for cypress', ()=>{
        cy.visit('http://www.google.com');
    cy.get("#W0wltc .sy4vM").click();
    cy.get('[name="q"]').type('cypress{enter}');
    cy.contains('Cypress: JavaScript End to End Testing Framework').should('be.visible');
  })
})