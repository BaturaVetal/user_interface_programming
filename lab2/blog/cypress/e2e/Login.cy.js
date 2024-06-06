describe('Login Page', () => {
  it('should log in with correct credentials', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('users', JSON.stringify([
        { email: 'test@example.com', password: 'password' },
      ]));
    });
    cy.visit('/login');
    cy.get('[data-cy="email-input"]').type('test@example.com');
    cy.get('[data-cy="password-input"]').type('password');
    cy.get('[data-cy="login-button"]').click();
    cy.window().its('localStorage.loggedInUser').should('exist');
  });

  it('should show error for incorrect credentials', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('users', JSON.stringify([
        { email: 'test@example.com', password: 'password' },
      ]));
    });
    cy.visit('/login');
    cy.get('[data-cy="email-input"]').type('wrong@example.com');
    cy.get('[data-cy="password-input"]').type('password');
    cy.get('[data-cy="login-button"]').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Невірний email або пароль');
    });
  });

  it('should display loading indicator', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('users', JSON.stringify([
        { email: 'test@example.com', password: 'password' },
      ]));
    });
    cy.visit('/login');
    cy.get('[data-cy="email-input"]').type('test@example.com');
    cy.get('[data-cy="password-input"]').type('password');
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-button"]').should('have.class', 'v-btn--loading');
  });
});
