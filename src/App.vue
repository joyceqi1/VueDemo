<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MyComonent :value="val" v-on:getData="show"> my profile </MyComonent>
    <p>{{ newVal }}</p>
    <input v-model="input" />
    <button v-on:click="click()">存入localstorage</button>
    <button v-on:click="hidden()">hidden</button>
    <div>
      <table border="1" v-if="isShow">
        <tr>
          <th>name</th>
          <th>age</th>
        </tr>
        <tr v-for="item in peopleList" v-bind:key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
        </tr>
      </table>
      <button v-on:click="tablePop()">pop</button>
      <button v-on:click="add()">add</button>
    </div>
  </div>
</template>

<script>
// import func from "vue-editor-bridge";
import HelloWorld from "./components/HelloWorld.vue";
import MyComonent from "./components/MyComponent.vue";
import local from "../utils/localstorage";

export default {
  name: "App",
  components: {
    HelloWorld,
    MyComonent,
  },
  data: function () {
    return {
      val: "父组件传值",
      newVal: "初始值",
      input: "",
      local: new local(),
      isShow: true,
      peopleList: [
        { name: "tom", age: 12 },
        { name: "jeck", age: 23 },
        { name: "sherry", age: 524 },
        { name: "cosin", age: 93 },
        { name: "martin", age: 34 },
      ],
    };
  },
  methods: {
    show(test) {
      this.newVal = test;
      console.log("子组件传值：", test);
    },
    click() {
      console.log("click");

      this.local.setItem("input", this.input);
    },
    tablePop(){
      this.peopleList.pop();
    },
    hidden(){
      this.isShow = !this.isShow
      console.log('show: ', this.isShow)
    },
    add(){
      this.peopleList.forEach((item)=>{
        item.age += 1;
      })
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
