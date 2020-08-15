<template>
  <Layout>
    <table>
      <tr>
        <td>username</td>
        <td>{{username}}</td>
      </tr>
      <tr>
        <td>date</td>
        <td>{{date}}</td>
      </tr>
      <tr>
        <td>culture</td>
        <td>{{culture}}</td>
      </tr>
      <td>description</td>
      <td>{{description}}</td>
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
      adv_id: this.$route.params.id,
      username: '',
      date: '',
      culture: '',
      description: ''
    }
  },

  mounted: function (){
    axios.get(`http://127.0.0.1:1337/advertisements/${this.adv_id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`
      }
    }).then(request => {
      let data = request.data
      this.username = data.user.username
      this.date = data.created_at
      this.culture = data.culture
      this.description = data.description
    })
  }
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
