describe('Register Page', () => {
  it('should register a new user', () => {
    cy.visit('/register');
    cy.get('[data-cy="name-input"]').type('Batura Vitaliy');
    cy.get('[data-cy="email-input"]').type('test@example.com');
    cy.get('[data-cy="password-input"]').type('password');
    cy.get('[data-cy="dob-input"]').type('2000-01-01');
    cy.get('[data-cy="gender-select"]').click();
    cy.contains('Чоловік').click();
    cy.get('[data-cy="register-button"]').click();
    cy.window().its('localStorage.users').should('exist');
  });

  it('should clear input fields after registration', () => {
    cy.visit('/register');
    cy.get('[data-cy="name-input"]').type('Batura Vitaliy');
    cy.get('[data-cy="email-input"]').type('test@example.com');
    cy.get('[data-cy="password-input"]').type('password');
    cy.get('[data-cy="dob-input"]').type('2000-01-01');
    cy.get('[data-cy="gender-select"]').click();
    cy.contains('Чоловік').click();
    cy.get('[data-cy="register-button"]').click();
    cy.get('[data-cy="name-input"]').should('have.value', '');
    cy.get('[data-cy="email-input"]').should('have.value', '');
    cy.get('[data-cy="password-input"]').should('have.value', '');
    cy.get('[data-cy="dob-input"]').should('have.value', '');
  });

  it('should show error message if any field is missing', () => {
    cy.visit('/register');
    cy.get('[data-cy="register-button"]').click();
    cy.contains('Заповніть всі поля');
  });
});
