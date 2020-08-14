<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1>Create publication</h1>

    <form>
    	<p><input type="text" placeholder="culture" v-model="culture"></p>
    	<p><textarea cols="30" rows="10" placeholder="description" v-model="description"></textarea></p>
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
  		culture: '',
  		description: '',
  	}
  },
  methods: {
  	regEvent: function(){
  		axios
		  .post('http://localhost:1337/advertisements', {
		    culture: this.culture,
        	description: this.description
		  }, {
		    headers: {
		      Authorization: `Bearer ${localStorage.jwt}`
        }
      })
		  .then(response => {
		    alert('Well done!')
		  })
		  .catch(error => {
		    // Handle error.
		    alert("Error")
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
