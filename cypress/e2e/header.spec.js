describe('Header', () => {
  it('contains the correct links', () => {
    cy.visit('/')

    cy.get('nav')
      .contains('conduit')
      .should('have.attr', 'href', '#/')
  })
})
