<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" v-show="!showMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="showMenu">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/add-post">Add Post</v-btn>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
        <v-btn text to="/profile">Profile</v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline">Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/add-post">
          <v-list-item-title>Add Post</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/register">
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/profile">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      showMenu: true
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.showMenu = window.innerWidth > 600;
    }
  }
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}
</style>
