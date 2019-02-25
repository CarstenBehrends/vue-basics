<template>
  <div id="app">
    <!-- <computed-properties></computed-properties> -->
    <filtered-list></filtered-list>
  </div>
</template>

<script>
import FilteredList from "./components/FilteredList.vue";
import ComputedProperties from "./components/ComputedProperties.vue";

export default {
  name: "app",
  components: {
    ComputedProperties,
    FilteredList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
