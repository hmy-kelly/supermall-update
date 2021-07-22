<template>
  <div id="tabbaritem" @click="itemClick">
    <div v-if='!isActive'><slot name='tabbar_icon'></slot></div>
    <div v-else><slot name='tabbar_icon_active'></slot></div>
    <div :style="activeStyle"><slot name='tabbar_text'></slot></div>
</div>
</template>

<script>
  export default {
    name: 'tabbar_item',
props:{
    path:String,
    activeColor:{
        type:String,
        default:'red',
    }
},
data(){
    return{
        // isActive:true,
        
    }
},
computed:{
    isActive(){

        //A.indexOf(B)检测A中是否含有子串B，若不含有，返回-1；
return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
return this.isActive? {color:this.activeColor}:{};
    }
},
methods:{
    itemClick(){
        this.$router.replace(this.path);
    }
}

  }
</script>

<style>
    #tabbaritem{
        font-size: 12px;
        flex: 1;
    }


#tabbaritem img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}


</style>
