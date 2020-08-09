<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1>Register</h1>

    <form>
    	<p><input type="text" placeholder="username" v-model="username"></p>
    	<p><input type="password" placeholder="password" v-model="password"></p>
   		<p><button v-on:click.prevent="regEvent">Login!</button></p>
    </form>

  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  metaInfo: {
    title: 'Login'
  },

  data() {
  	return {
  		username: '',
  		password: '',
  	}
  },
  methods: {
  	regEvent: function(){
  		axios
		  .post('http://localhost:1337/auth/local/', {
		    username: this.username,
		    password: this.password,
		  })
		  .then(response => {
		    // Handle success.
		    alert('Well done!')
		    localStorage.setItem('username', response.data.user.username)
        localStorage.setItem('jwt', response.data.jwt)
		  })
		  .catch(error => {
		    // Handle error.
		    alert("Incorrect credentials!")
		  });
  		}
  	}
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
