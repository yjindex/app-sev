<template>
  <div id="app">
  <mt-header fixed title="黑马程序员·Vue项目"></mt-header>
  <transition>
    <router-view></router-view>
  </transition>
  <v-footer> </v-footer> 
  </div>
</template>

<script>
import footer from '@/components/footer'
export default {
  name: 'App',
  components:{
    "v-footer":footer
  }
}
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
