<template>
      <div class="back">
        <img src="@/assets/imgs/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: 'BackTop',
       
    }
</script>

<style scoped>
    .back {
    position: fixed;
    right: 8px;
    bottom: 55px;
    
    z-index: 999;
   
    }
    .back img {
    width: 43px;
    height: 43px;
    }
</style>