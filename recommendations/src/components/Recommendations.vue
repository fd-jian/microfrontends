<template>
  <div>
    <h2>Recommandations</h2>
    <p>
      Are you maybe interested in one of these: 
    </p>
    <ul>
      <li v-for="book in books">{{ book }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommendations',
  props: {
    user: String
  }, 
  computed: {
    books() {
      const currentUser = this.user || '';

      return currentUser.length % 2 === 0 ? 
        [
          "Docker is not a whale",
          "Kubernetes is not an octupus"
        ] :
        [
          "Linux for Runaways",
          "Mastering C",
          "Bashing like a pro"
        ];
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>
