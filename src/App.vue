<template>
  <div id="app">
    <Start/>
    <Finish/>
    <ButtonGo/>
  </div>
</template>

<script>
import Start from "./components/Start";
import Finish from "./components/Finish";
import ButtonGo from "./components/Button-Go";

export default {
  name: 'App',
  components: {
    ButtonGo,
    Start,
    Finish
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
