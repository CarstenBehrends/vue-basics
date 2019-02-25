<template>
  <div>
    <nav id="main-nav">
      <ul>
        <li>
          <router-link :to="{name:'home'}" exact>Home</router-link>|
        </li>
        <li>
          <router-link to="/demos">Demos</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main-nav{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

a.router-link-active,
li.router-link-active > a {
  background-color: red;
}
</style>