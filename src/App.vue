<template>
  <div id="app" style="margin-top: 60px;background-color: #000f1e;margin: 0;height: 100vh" >
    <rotate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import elementTest from './components/elementTest.vue';
import animateTest from './components/animateTest.vue';
import dataVTest from './components/dataVTest.vue';
import echartsTest from './components/echartsTest.vue';
import rotate from './components/rotate.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    elementTest,
    animateTest,
    dataVTest,
    echartsTest,
    rotate
  }
});
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  overflow: auto;
}
* {
  margin: 0;
  padding: 0;
}
</style>
