describe('Profile Page', () => {
    it('should display user profile information', () => {
      cy.window().then((win) => {
        win.localStorage.setItem('loggedInUser', JSON.stringify({
          name: 'Batura Vitaliy',
          email: 'test@example.com',
          gender: 'Чоловік',
          dob: '2000-01-01',
        }));
      });
      cy.visit('/profile');
      cy.contains('Ім’я: Batura Vitaliy');
      cy.contains('Email: test@example.com');
      cy.contains('Стать: Чоловік');
      cy.contains('Дата народження: 2000-01-01');
    });
  
    it('should handle missing user data gracefully', () => {
      cy.window().then((win) => {
        win.localStorage.removeItem('loggedInUser');
      });
      cy.visit('/profile');
      cy.contains('Інформація про користувача недоступна');
    });
  });
  