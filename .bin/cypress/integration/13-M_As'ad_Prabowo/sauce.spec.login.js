/// <reference types="cypress" />

context('Sauce.spec.login', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    // https://on.cypress.io/interacting-with-elements

    it('Check for Standard User', () => {
        cy.get('#user-name')
            .parent('form')
            .find('[name="user-name"]').type('standard_user')
            .parent('form')
            .find('[name="password"]').type('secret_sauce')
            .parent('form')
            .find('input').contains('Login').click()
        
        cy.contains('Product').should('be.visible')
    })

    it('Check for Locked Out User', () => {
        cy.get('#user-name')
            .parent('form')
            .find('[name="user-name"]').type('locked_out_user')
            .parent('form')
            .find('[name="password"]').type('secret_sauce')
            .parent('form')
            .find('input').contains('Login').click()
        
        cy.contains('Login').should('be.cannot')
    })

    it('Check for Problem User', () => {
        cy.get('#user-name')
            .parent('form')
            .find('[name="user-name"]').type('problem_user')
            .parent('form')
            .find('[name="password"]').type('secret_sauce')
            .parent('form')
            .find('input').contains('Login').click()
        
        cy.contains('Product').should('be.error')
    })

    it('Check for Performance Glitch User', () => {
        cy.get('#user-name')
            .parent('form')
            .find('[name="user-name"]').type('performance_glitch_user')
            .parent('form')
            .find('[name="password"]').type('secret_sauce')
            .parent('form')
            .find('input').contains('Login').click()
        
        cy.contains('Login').should('be.glitch')
    })

})
