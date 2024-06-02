<template>
    <v-card>
        <v-card-title>Вхід</v-card-title>
        <v-card-text>
        <v-form>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-text-field label="Пароль" type="password" v-model="password"></v-text-field>
            <v-btn @click="login">Вхід</v-btn>
        </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
        email: '',
        password: '',
        users: []
        };
    },
    methods: {
        login() {
        const user = this.users.find(user => user.email === this.email && user.password === this.password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
        } else {
            alert('Невірний email або пароль');
        }
        }
    },
    mounted() {
        if (localStorage.getItem('users')) {
        this.users = JSON.parse(localStorage.getItem('users'));
        }
    }
};
</script>  