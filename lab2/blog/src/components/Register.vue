<template>
  <v-card>
    <v-card-title>Реєстрація</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Ім’я" v-model="name" data-cy="name-input"></v-text-field>
        <v-text-field label="Email" v-model="email" data-cy="email-input"></v-text-field>
        <v-select label="Стать" :items="['Чоловік', 'Жінка']" v-model="gender" data-cy="gender-select"></v-select>
        <v-text-field label="Дата народження" v-model="dob" type="date" data-cy="dob-input"></v-text-field>
        <v-text-field label="Пароль" v-model="password" type="password" data-cy="password-input"></v-text-field>
        <v-btn @click="register" data-cy="register-button">Реєстрація</v-btn>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
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
      users: [],
      errorMessage: ''
    };
  },
  methods: {
    register() {
      if (!this.name || !this.email || !this.gender || !this.dob || !this.password) {
        this.errorMessage = 'Заповніть всі поля';
        return;
      }
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
      this.errorMessage = '';
    }
  },
  mounted() {
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
  }
};
</script>
