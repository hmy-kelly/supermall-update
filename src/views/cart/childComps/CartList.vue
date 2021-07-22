<template>
    <div>
        <cart-list-item 
        v-for='(item,index) in $store.state.cartList'
        :key='index'
        :product='item'>
        </cart-list-item>
    </div>
  
</template>

<script>

    import CartListItem from './CartListItem'
  export default {
    name: 'CartList',
components:{
    CartListItem,
}

  }
</script>

<style scoped>

</style>
