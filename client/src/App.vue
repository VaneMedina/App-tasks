<template>
  <Task />
</template>

<script>
import NavBar from "./components/NavBar";
import Task from "./components/Task.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Task
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
