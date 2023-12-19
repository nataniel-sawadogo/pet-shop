<script lang="ts" setup>
  import HeaderItem from './components/HeaderItem.vue';
</script>

<template>
  <HeaderItem />
  <div class="main-container">
    <router-view/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  /* background: var(--background); */
  height: 100vh;
  width: 100%;
}

.main-container{
  height: 90%;
  width: 100%;
}

button{
  border-radius: 1.5em;
  border: none;
}
</style>
