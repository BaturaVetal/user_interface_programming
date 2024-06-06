<template>
    <v-card>
      <v-card-title>Профіль користувача</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-if="user">
            <v-list-item-content>Ім’я: {{ user.name }}</v-list-item-content>
          </v-list-item>
          <v-list-item v-if="user">
            <v-list-item-content>Email: {{ user.email }}</v-list-item-content>
          </v-list-item>
          <v-list-item v-if="user">
            <v-list-item-content>Стать: {{ user.gender }}</v-list-item-content>
          </v-list-item>
          <v-list-item v-if="user">
            <v-list-item-content>Дата народження: {{ user.dob }}</v-list-item-content>
          </v-list-item>
          <v-list-item v-if="!user">
            <v-list-item-content>Інформація про користувача недоступна</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'ProfileComponent',
    data() {
      return {
        user: null
      };
    },
    mounted() {
      if (localStorage.getItem('loggedInUser')) {
        this.user = JSON.parse(localStorage.getItem('loggedInUser'));
      }
    }
  };
  </script>
  