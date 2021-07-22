<template>
      <div id="tabBar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tabBar',
    }
</script>

<style>
    @import
    '../../../assets/css/base.css';
    #tabBar
    {
    background-color:
    #f6f6f6;
    display:
    flex;
    height: 49px;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    text-align: center;
  
    }


</style>