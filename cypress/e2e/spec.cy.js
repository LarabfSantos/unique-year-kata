describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
it('tests template', () => {
  cy.visit('http://localhost:8000')
  cy.get('title').contains("Unique Year")
  cy.get('H1').contains("Unique Year")
  cy.get('input')
  cy.get('button').contains("submit")
})
