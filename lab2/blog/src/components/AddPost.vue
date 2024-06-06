<template>
  <v-card>
    <v-card-title>Додати повідомлення</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field 
          label="Назва" 
          v-model="postTitle"
          data-cy="post-title"
        ></v-text-field>
        <v-textarea 
          label="Вміст" 
          v-model="postContent"
          data-cy="post-content"
        ></v-textarea>
        <v-btn 
          @click="addPost"
          data-cy="add-post-btn"
        >Додати повідомлення</v-btn>
        <v-alert v-if="error" type="error" data-cy="error-msg">{{ error }}</v-alert>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AddPostComponent',
  data() {
    return {
      postTitle: '',
      postContent: '',
      posts: [],
      error: ''
    };
  },
  methods: {
    addPost() {
      if (!this.postTitle || !this.postContent) {
        this.error = 'Заповніть всі поля';
        return;
      }
      this.error = '';
      const newPost = {
        id: Date.now(),
        title: this.postTitle,
        content: this.postContent
      };
      this.posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(this.posts));
      this.postTitle = '';
      this.postContent = '';
    }
  },
  mounted() {
    if (localStorage.getItem('posts')) {
      this.posts = JSON.parse(localStorage.getItem('posts'));
    }
  }
};
</script>