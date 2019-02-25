<template>
  <div>
    <input v-model="name" type="text">
    <input v-model="surname" type="text" id="surname" value="Snow">
    <button @click="saveSurname">save Surname</button>
    <output>{{computedFullName }}</output>
  </div>
</template>

<script>
let surname = "Snow";
export default {
  data() {
    return {
      name: "John"
    };
  },
  computed: {
    computedFullName() {
      return this.name + " " + surname;
    }
  },
  methods: {
    saveSurname() {
        surname = this.$el.querySelector('#surname').value
    }
  }
};
</script>

<style scoped>
</style>

