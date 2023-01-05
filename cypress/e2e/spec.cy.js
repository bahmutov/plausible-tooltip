// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
import 'cypress-real-events'

it('shows the tooltip', { scrollBehavior: 'center' }, () => {
  cy.visit('/plausible.io')
  // find the element with "Bounce rate" text
  // and hover over it
  cy.contains('Bounce rate').realHover().wait(1000)
  // the tooltip "Click to show" should appear
  cy.contains('[role=tooltip]', 'Click to show').should('be.visible')
  // click on the "Bounce rate" and the tooltip
  cy.contains('Bounce rate').click().wait(1000)
  // should switch to "Click to hide"
  cy.contains('[role=tooltip]', 'Click to hide').should('be.visible')
  // Click the "Bounce rate" once more time
  cy.contains('Bounce rate').click().wait(1000)
  // Then click on some other element
  cy.contains('button', 'Filter').realHover()
  // and the tooltip should go away
  cy.get('[role=tooltip]').should('not.exist')
})
