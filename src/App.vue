<template>
  <div id="app">
    <keep-alive exclude='Detail'>
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
  import maintabbar from './components/content/MainTabbar/maintabbar'

  export default {
    name: 'app',
    components: {
      maintabbar
    }
  }
</script>

<style>

</style>