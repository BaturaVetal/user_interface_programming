<template>
    <v-card>
        <v-card-title>Додати повідомлення</v-card-title>
        <v-card-text>
        <v-form>
            <v-text-field label="Назва" v-model="postTitle"></v-text-field>
            <v-textarea label="Вміст" v-model="postContent"></v-textarea>
            <v-btn @click="addPost">Додати повідомлення</v-btn>
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
        posts: []
        };
    },
    methods: {
        addPost() {
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