<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1>Personal</h1>
    <table>
      <tr><td>ID</td><td>{{ id }}</td></tr>
      <tr><td>Username</td><td>{{ username }}</td></tr>
      <tr><td>E-mail</td><td>{{ email }}</td></tr>
      <tr><td>Accaunt type</td><td>{{ accaunt_type }}</td></tr>
    </table>
    <h2 v-if="accaunt_type == 'farmer'">Your addvertisements</h2>
    <table v-if="accaunt_type == 'farmer'">
      <tr v-for="item in posts">
        <td>{{item.culture}}</td>
        <td>{{item.created_at}}</td>
      </tr>
    </table>
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
      id: '',
  		username: localStorage.username,
  		email: '',
      accaunt_type: '',
      posts: []
  	}
  },
  mounted: function () {
    axios.get(`http://localhost:1337/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      }
    }).then(response => {
      this.id = response.data.id
      this.email = response.data.email
      this.accaunt_type = response.data.role.name
    })

    axios.get(`http://localhost:1337/advertisements?user.username=${this.username}`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`,
      }
    }).then(response => {
      this.posts = response.data
    })
  }
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
