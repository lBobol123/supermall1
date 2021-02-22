<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  @import './assets/css/base.css';
</style>
