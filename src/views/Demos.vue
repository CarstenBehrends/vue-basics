<template>
  <div class="page">
    <h1>Demos</h1>

    <filtered-list></filtered-list>
  </div>
</template>

<script>
import FilteredList from "../components/FilteredList.vue";
export default {
  name: "demos",
  components: {
    FilteredList
  }
};
</script>

<style scoped>
</style>