<template>
  <div id="app">
    <h1>app view</h1>
    <!-- <router-view /> -->
    <router-view name='about'/>
    <button @click="click">点击</button>
  </div>
</template>

<script>

export default {
  
  name: "App",
  components: {
  },
  data: function () {
    return {
    };
  },
  methods: {
    click(){
      this.$store.commit('increment');
      console.log(this.$store.state.count)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
