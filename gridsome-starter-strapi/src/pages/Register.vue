<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1>Register</h1>

    <form>
    	<p><input type="text" placeholder="username" v-model="username"></p>
    	<p><input type="email" placeholder="email" v-model="email"></p>
    	<p><input type="password" placeholder="password" v-model="password"></p>
    	<p><label>
    		Beekeeper
    		<input type="radio" name="role" value="beekeeper" v-model="role">
   		</label></p>
   		<p><label>
   			Farmer
   			<input type="radio" name="role" value="farmer" v-model="role">
   		</label></p>
   		<p v-if="role == 'beekeeper'"><input type="text" placeholder="hive amount" v-model="hive_amount"></p>
   		<p><button v-on:click.prevent="regEvent">Register!</button></p>
    </form>

  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  metaInfo: {
    title: 'Register'
  },

  data() {
  	return {
  		username: '',
  		email: '',
  		password: '',
  		role: '',
  		hive_amount: ''
  	}
  },
  methods: {
  	regEvent: function(){
  		axios
		  .post('http://localhost:1337/auth/local/register', {
		    username: this.username,
		    email: this.email,
		    password: this.password,
		    hive_amount: this.hive_amount,
		    role: this.role
		  })
		  .then(response => {
		    // Handle success.
		    alert('Well done!')
        localStorage.setItem('username', response.data.user.username)
		    localStorage.setItem('jwt', response.data.jwt)
		  })
		  .catch(error => {
		    // Handle error.
		    alert('Incorect credentials!')
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
