<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/register/" v-if="!username">Register</g-link>
        <g-link class="nav__link" to="/login/" v-if="!username">Login</g-link>
        <g-link class="nav__link" to="/lk/">{{ username }} </g-link>
        <a href="#" v-on:click="log_out" v-if="username">Log out</a>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script type="text/javascript">
export default {
  data(){
    return {
      username: localStorage.username
    }
  },

  methods: {
    log_out: () => {
      delete localStorage.username
      delete localStorage.jwt
      location.reload()
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
