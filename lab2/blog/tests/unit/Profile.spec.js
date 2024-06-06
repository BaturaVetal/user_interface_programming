import { shallowMount } from '@vue/test-utils';
import ProfileComponent from '@/components/Profile.vue';


describe('Profile.vue', () => {
  it('renders user profile information', () => {
    const wrapper = shallowMount(ProfileComponent, {
      data() {
        return {
          user: { name: 'Batura Vitaliy', email: 'test@example.com', gender: 'Чоловік', dob: '2000-01-01' }
        };
      }
    });
    expect(wrapper.text()).toContain('Ім’я: Batura Vitaliy');
    expect(wrapper.text()).toContain('Email: test@example.com');
  });


  it('handles missing user data gracefully', () => {
    const wrapper = shallowMount(ProfileComponent, {
      data() {
        return {
          user: null
        };
      }
    });
    expect(wrapper.text()).toContain('Інформація про користувача недоступна');
  });


  it('matches the snapshot', () => {
    const wrapper = shallowMount(ProfileComponent, {
      data() {
        return {
          user: { name: 'Batura Vitaliy', email: 'test@example.com', gender: 'Чоловік', dob: '2000-01-01' }
        };
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
