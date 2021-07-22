<template>
  <div class="goodslist">
    <goods-list-item v-for='(item,id) in goodslist' :goodsitem='item':key='id'>

    </goods-list-item>

</div>
</template>

<script>
    import GoodsListItem from './GoodsListItem'
  export default {
    name: 'GoodsList',
components:{
    GoodsListItem
},
data(){
    return {
        
    }
},
props:{
    goodslist:{
        type:Array,
        default(){
            return []
        }
    }
}
  }
</script>

<style scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    /* padding: 2px; */
}
</style>
