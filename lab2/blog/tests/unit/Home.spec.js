import { shallowMount } from '@vue/test-utils';
import HomeComponent from '@/components/Home.vue';

describe('Home.vue', () => {
  it('renders a list of posts', () => {
    const wrapper = shallowMount(HomeComponent, {
      data() {
        return {
          posts: [
            { id: 1, title: 'Post 1', content: 'Content 1' },
            { id: 2, title: 'Post 2', content: 'Content 2' }
          ]
        };
      }
    });
    expect(wrapper.findAll('.post-title').length).toBe(2);
    expect(wrapper.find('.post-title').text()).toBe('Post 1');
  });

  it('displays a message if there are no posts', () => {
    const wrapper = shallowMount(HomeComponent, {
      data() {
        return {
          posts: [],
          error: false
        };
      }
    });
    expect(wrapper.text()).toContain('Немає постів для відображення');
  });

  it('handles error state correctly', () => {
    const wrapper = shallowMount(HomeComponent, {
      data() {
        return {
          posts: [],
          error: true
        };
      }
    });
    expect(wrapper.text()).toContain('Помилка завантаження постів');
  });
});
