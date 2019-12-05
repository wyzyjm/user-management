<template>
  <div id="app">
    <navb></navb>
    <router-view></router-view>
  </div>
</template>

<script>
import navb from "@/components/Home";
export default {
  name: "App",
  components: {
    navb
  }
};
</script>

<style> 
</style>
