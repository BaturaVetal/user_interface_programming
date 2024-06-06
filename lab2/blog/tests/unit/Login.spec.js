import { shallowMount } from '@vue/test-utils';
import LoginComponent from '@/components/Login.vue';

describe('Login.vue', () => {
  it('logs in a user with correct credentials', () => {
    const wrapper = shallowMount(LoginComponent, {
      data() {
        return {
          email: 'test@example.com',
          password: 'password',
          users: [{ email: 'test@example.com', password: 'password' }]
        };
      }
    });
    wrapper.vm.login();
    setTimeout(() => {
      expect(localStorage.getItem('loggedInUser')).toBeTruthy();
    }, 1000);
  });

  it('shows an error for incorrect credentials', () => {
    const wrapper = shallowMount(LoginComponent, {
      data() {
        return {
          email: 'wrong@example.com',
          password: 'password',
          users: [{ email: 'test@example.com', password: 'password' }]
        };
      }
    });
    window.alert = jest.fn();
    wrapper.vm.login();
    setTimeout(() => {
      expect(window.alert).toHaveBeenCalledWith('Невірний email або пароль');
    }, 1000);
  });

  it('displays a loading indicator while logging in', () => {
    const wrapper = shallowMount(LoginComponent, {
      data() {
        return {
          email: 'test@example.com',
          password: 'password',
          users: [{ email: 'test@example.com', password: 'password' }]
        };
      }
    });
    wrapper.vm.login();
    expect(wrapper.vm.loading).toBe(true);
  });
});
