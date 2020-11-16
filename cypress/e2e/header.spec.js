describe('Header', () => {
  it('contains the correct links in the correct order', () => {
    cy.visit('/');

    cy.findAllByRole('navigation').contains('conduit Home Sign in Sign up');

    cy.findAllByRole('navigation')
      .contains('conduit')
      .should('have.attr', 'href', '#/');

    cy.findAllByRole('navigation')
      .contains('Home')
      .should('have.attr', 'href', '#/');

    cy.findAllByRole('navigation')
      .contains('Sign in')
      .should('have.attr', 'href', '#/login');

    cy.findAllByRole('navigation')
      .contains('Sign up')
      .should('have.attr', 'href', '#/register');
  });
});
