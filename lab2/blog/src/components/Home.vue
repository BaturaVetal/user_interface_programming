<template>
  <v-card>
    <v-card-title>Блог</v-card-title>
    <v-card-text>
      <v-list>
        <template v-if="error">
          <v-alert type="error">Помилка завантаження постів</v-alert>
        </template>
        <template v-else-if="posts.length > 0">
          <v-list-item v-for="post in posts" :key="post.id">
            <v-list-item-content>
              <v-list-item-title class="post-title">{{ post.title }}</v-list-item-title>
              <v-list-item-subtitle class="post-content">{{ post.content }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-else>
          <v-alert type="info">Немає постів для відображення</v-alert>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      posts: [],
      error: false
    };
  },
  mounted() {
    setTimeout(() => {
      if (localStorage.getItem('error') === 'true') {
        this.error = true;
      } else {
        if (localStorage.getItem('posts')) {
          this.posts = JSON.parse(localStorage.getItem('posts'));
        } else {
          this.posts = [];
        }
      }
    }, 1000);
  }
};
</script>

<style scoped>
.post-title {
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
  display: block;
}

.post-content {
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
  display: block;
}
</style>
