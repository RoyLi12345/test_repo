<template>
  <div class="">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
  
</template>

<script>

import topNav from './components/topNav.vue'

export default {
  name: 'app',
  components: {
    topNav
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

</style>
