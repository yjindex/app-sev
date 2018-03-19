<template>
  <div id="app">
  <mt-header fixed title="黑马程序员·Vue项目"></mt-header>
  <transition> 
    <router-view></router-view>
  </transition>
  <v-footer></v-footer>
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

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

