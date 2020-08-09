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
      accaunt_type: ''
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
  }
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
