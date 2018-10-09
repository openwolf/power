<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If iView is successfully added to this project, you'll see an
        <code v-text="'<Button>'"></code>
        below
      </p>
      <Button type="primary">Button</Button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { DatePicker } from 'iview';
// import 'iview/dist/styles/iview.css';

export default {
  name: 'app',
  components: {
    HelloWorld,
    DatePicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
