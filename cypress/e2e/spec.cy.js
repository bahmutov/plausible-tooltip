// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
import 'cypress-real-events'

it('shows the tooltip', { scrollBehavior: 'center' }, () => {
  cy.visit('/plausible.io')
  cy.contains('Bounce rate').realHover().wait(1000)
  cy.contains('[role=tooltip]', 'Click to show').should('be.visible')
  cy.contains('Bounce rate').click().wait(1000)
  cy.contains('[role=tooltip]', 'Click to hide').should('be.visible')
  cy.contains('Bounce rate').click().wait(1000)
  cy.contains('button', 'Filter').realHover()
  cy.get('[role=tooltip]').should('not.exist')
})
