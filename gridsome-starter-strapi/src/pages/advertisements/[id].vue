<template>
  <Layout>
    <h1>{{culture}}</h1>
    <p>{{description}}</p>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      culture: '',
      description: ''
    }
  },
  async mounted() {
    const { id } = this.$route.params
    axios.get(`http://127.0.0.1:1337/advertisements/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.jwt}`
      }
    }).then(response => {
      console.log(response.data)
    })
  }
}
</script>