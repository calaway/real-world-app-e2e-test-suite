describe('Header', () => {
  it('contains the correct links', () => {
    cy.visit('/')

    cy.findAllByRole('navigation')
      .contains('conduit')
      .should('have.attr', 'href', '#/')
  })
})
