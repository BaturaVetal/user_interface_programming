<template>
    <v-card>
        <v-card-title>Реєстрація</v-card-title>
        <v-card-text>
        <v-form>
            <v-text-field label="Ім’я" v-model="name"></v-text-field>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-select label="Стать" :items="['Чоловік', 'Жінка']" v-model="gender"></v-select>
            <v-text-field label="Дата народження" v-model="dob" type="date"></v-text-field>
            <v-text-field label="Пароль" v-model="password" type="password"></v-text-field>
            <v-btn @click="register">Реєстрація</v-btn>
        </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'RegisterComponent',
    data() {
        return {
        name: '',
        email: '',
        gender: '',
        dob: '',
        password: '',
        users: []
        };
    },
    methods: {
        register() {
        const newUser = {
            name: this.name,
            email: this.email,
            gender: this.gender,
            dob: this.dob,
            password: this.password
        };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.name = '';
        this.email = '';
        this.gender = '';
        this.dob = '';
        this.password = '';
        }
    },
    mounted() {
        if (localStorage.getItem('users')) {
        this.users = JSON.parse(localStorage.getItem('users'));
        }
    }
};
</script>  