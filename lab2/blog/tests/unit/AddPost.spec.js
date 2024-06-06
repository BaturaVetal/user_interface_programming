import { shallowMount } from '@vue/test-utils';
import AddPostComponent from '@/components/AddPost.vue';


describe('AddPost.vue', () => {
  it('adds a post to the list', () => {
    const wrapper = shallowMount(AddPostComponent);
    wrapper.setData({ postTitle: 'New Post', postContent: 'New Content' });
    wrapper.find('v-btn').trigger('click');
    expect(wrapper.vm.posts).toHaveLength(1);
    expect(wrapper.vm.posts[0].title).toBe('New Post');
  });


  it('clears input fields after adding a post', async () => {
    const wrapper = shallowMount(AddPostComponent);
    wrapper.setData({ postTitle: 'New Post', postContent: 'New Content' });
    wrapper.find('v-btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.postTitle).toBe('');
    expect(wrapper.vm.postContent).toBe('');
  });


  it('displays an error message if title or content is missing', async () => {
    const wrapper = shallowMount(AddPostComponent);
    wrapper.setData({ postTitle: '', postContent: '' });
    wrapper.find('v-btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Заповніть всі поля');
  });
});
