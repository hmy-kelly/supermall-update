<template>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load='imageLoad'>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        /* 
        避免图片加载4次，此处加载1此知道图片高度即可，与下面加载数据时的防抖不同
        */
isLoad:false,
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad(){
        // console.log('imagae')
        if(!this.isLoad){
          this.$emit('imageLoad');
          this.isLoad = true;
        }
       
      }
    }
  }
</script>

<style scoped>

</style>
