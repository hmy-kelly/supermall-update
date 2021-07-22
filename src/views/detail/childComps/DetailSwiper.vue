<template>
          <swiper class="swiper-view">
            <swiper-item v-for='(item,index) in topimg' :key='index'>
                <img :src='item' alt="">
            </swiper-item>
        </swiper>
</template>

<script>
    import { Swiper, SwiperItem } from '/src/components/common/swiper/index'
    export default {
        name: 'DetailSwiper',
        props: {
            topimg: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>

<style scoped>
    .swiper-view{
        height: 300px;
    }

</style>