<template>
      <div class="check" :class='{ischeck:ischecked}'>
        <img src="@/assets/imgs/cart/tick.svg" 
        alt="">
    </div>
</template>

<script>
    export default {
        name: 'CheckButton',
        props: {
            ischecked:Boolean,
            default:true,
        }
    }
</script>

<style scoped>
    .check{
        border: 2px solid #ccc;
        border-radius: 50%;
    }
    .ischeck {
    background-color:var(--color-tint);
    /* width: 20px;height: 20px; */
   

    }
</style>