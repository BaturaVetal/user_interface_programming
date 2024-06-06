import { shallowMount } from '@vue/test-utils';
import RegisterComponent from '@/components/Register.vue';


describe('Register.vue', () => {
  it('registers a new user', () => {
    const wrapper = shallowMount(RegisterComponent);
    wrapper.setData({
      name: 'Batura Vitaliy',
      email: 'test@example.com',
      gender: 'Чоловік',
      dob: '2000-01-01',
      password: 'password'
    });
    wrapper.find('v-btn').trigger('click');
    expect(wrapper.vm.users).toHaveLength(1);
    expect(wrapper.vm.users[0].email).toBe('test@example.com');
  });


  it('clears input fields after registration', async () => {
    const wrapper = shallowMount(RegisterComponent);
    wrapper.setData({
      name: 'Batura Vitaliy',
      email: 'test@example.com',
      gender: 'Чоловік',
      dob: '2000-01-01',
      password: 'password'
    });
    wrapper.find('v-btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.name).toBe('');
    expect(wrapper.vm.email).toBe('');
    expect(wrapper.vm.password).toBe('');
  });


  it('displays an error message if any field is missing', async () => {
    const wrapper = shallowMount(RegisterComponent);
    wrapper.setData({
      name: '',
      email: '',
      gender: '',
      dob: '',
      password: ''
    });
    wrapper.find('v-btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.error-message').text()).toContain('Заповніть всі поля');
  });  
});
