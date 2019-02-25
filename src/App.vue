
<template>
  <div id="app">
    <main-navigation></main-navigation>

    <!-- <transition mode="in-out"> -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- <filters></filters> -->
    <!-- <computed-properties></computed-properties> -->
    <!-- <filtered-list></filtered-list> -->
  </div>
</template>

<script>
/*eslint-disable vue/no-unused-components*/
import MainNavigation from "./components/nav/MainNavigation.vue";

export default {
  name: "app",
  components: {
    MainNavigation
  }
};
</script>

<style>
body{
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #ccc;
}

.page{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.v-enter-active,
.v-leave-active {
  transition:  all .5s;
}
.v-enter{
  opacity: 0;
  transform: translate(0, 20%);
}
.v-leave-active {
  opacity: 0;
  transform: translate(0, -20%);
}
</style>
