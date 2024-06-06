describe('About Page', () => {
    it('should display the correct content', () => {
      cy.visit('/about');
      cy.contains('Цей додаток є блогом');
    });
  });
  