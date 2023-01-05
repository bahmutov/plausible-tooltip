// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('shows the tooltip', { scrollBehavior: 'center' }, () => {
  cy.visit('/plausible.io')
  // find the element with "Bounce rate" text
  // and hover over it
  // the tooltip "Click to show" should appear
  // click on the "Bounce rate" and the tooltip
  // should switch to "Click to hide"
  // Click the "Bounce rate" once more time
  // Then click on some other element
  // and the tooltip should go away
})
