describe('Home Page', () => {
  it('should display posts', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('posts', JSON.stringify([
        { id: 1, title: 'Post 1', content: 'Content 1' },
        { id: 2, title: 'Post 2', content: 'Content 2' },
      ]));
    });
    cy.visit('/');
    cy.contains('Post 1');
    cy.contains('Content 1');
    cy.contains('Post 2');
    cy.contains('Content 2');
  });

  it('should display message if no posts', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('posts', JSON.stringify([]));
    });
    cy.visit('/');
    cy.contains('Немає постів для відображення');
  });

  it('should handle error state', () => {
    cy.window().then((win) => {
      win.localStorage.removeItem('posts');
      win.localStorage.setItem('error', 'true');
    });
    cy.visit('/');
    cy.contains('Помилка завантаження постів');
  });
});
