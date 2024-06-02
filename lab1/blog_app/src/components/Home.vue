<template>
    <v-card>
        <v-card-title>Блог</v-card-title>
        <v-card-text>
        <v-list>
            <v-list-item v-for="post in posts" :key="post.id">
            <v-list-item-content>
                <v-list-item-title class="post-title">{{ post.title }}</v-list-item-title>
                <v-list-item-subtitle class="post-content">{{ post.content }}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-card-text>
    </v-card>
</template>
  
<script>
export default {
    name: 'HomeComponent',
    data() {
        return {
        posts: []
        };
    },
    mounted() {
        if (localStorage.getItem('posts')) {
        this.posts = JSON.parse(localStorage.getItem('posts'));
        }
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
  