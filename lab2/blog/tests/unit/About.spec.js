import { shallowMount } from '@vue/test-utils';
import AboutComponent from '@/components/About.vue';


describe('About.vue', () => {
  it('renders about page content', () => {
    const wrapper = shallowMount(AboutComponent);
    expect(wrapper.text()).toContain('Цей додаток є блогом');
  });


  it('matches the snapshot', () => {
    const wrapper = shallowMount(AboutComponent);
    expect(wrapper.element).toMatchSnapshot();
  });
});
