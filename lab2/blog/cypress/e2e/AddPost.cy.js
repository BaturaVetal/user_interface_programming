describe('Add Post Page', () => {
  it('should add a new post', () => {
    cy.visit('/add-post');
    cy.get('[data-cy="post-title"]').type('New Post');
    cy.get('[data-cy="post-content"]').type('New Content');
    cy.get('[data-cy="add-post-btn"]').click();
    cy.visit('/');
    cy.contains('New Post');
    cy.contains('New Content');
  });

  it('should show an error if fields are empty', () => {
    cy.visit('/add-post');
    cy.get('[data-cy="add-post-btn"]').click();
    cy.contains('Заповніть всі поля');
  });
});
