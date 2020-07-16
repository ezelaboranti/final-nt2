<template>
  <div>
    <h1>Ingrese el texto a formatear</h1>
    <input type="text" v-model="texto" />
    <h1>{{texto | reemplazo}}</h1>
    <p>
      Respuestas:
      <br />1-b
      <br />2-b
      <br />3-4
      <br />4-b
      <br />5-b
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      texto: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
