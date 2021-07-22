<template>
  <div class="tab-control">
    <div v-for='(item,index) in titles' class="tabspan"
    :class="{active:currentIndex===index}">
        <span @click='clickItem(index)'>{{item}}</span>
    </div>
</div>
</template>

<script>
  export default {
    name: 'TabControl',
props:{
    titles:{
        type:Array,
        default(){
            return []
        }
    }
},
data(){
    return {
        currentIndex:0,
    }
},
methods:{
    clickItem(index){
        this.currentIndex = index;
        this.$emit('TabClick',index);
    }
}
  }
</script>

<style scoped>

    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        padding-top: 5px;
        position: sticky;
        top: 44px;
        height: 30px;
        /* z-index:999; */
        background-color: #fff;
       
    }
    .tab-control .tabspan{
        flex: 1;
      
    }
    .active{
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
        padding: 5px;
    }

   

</style>
