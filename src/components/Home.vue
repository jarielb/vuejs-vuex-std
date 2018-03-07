<template>
  <div id="app">
    <app-registration></app-registration>
    <app-registered></app-registered>
  </div>
</template>

<script>
import Registration from './Registration';
import Registered from './Registered';
export default {
  components: {
    appRegistration: Registration,
    appRegistered: Registered,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
