<template>
    <div id="detail">
        <detail-nav-bar class="detail_nav" @itemClick='itemClick' ref='nav'></detail-nav-bar>
        <scroll class="scroll-detail" 
        ref='scrolldetail' 
        @scrollshow='scrollShow' 
        :probe-type='3'>
            <detail-swiper :topimg='topimages'></detail-swiper>
            <!-- <detail-swiper @top-image='topImages'></detail-swiper> -->
            <detail-base-info :goods='goods'></detail-base-info>
            <detail-shop-info :shop='shopInfo'></detail-shop-info>
            <detail-goods-info :detail-info='detailInfo' @imgLoad='imgLoad'></detail-goods-info>
            <detail-goods-params ref='params' :params='goodsparams'></detail-goods-params>
            <detail-commend ref='commend' :commend='commend'></detail-commend>
            <goods-list ref='recommend' :goodslist='recommend'></goods-list>
        </scroll>
        <back-top @click.native='backClick' v-show='isShowBackTop'></back-top>
        <detail-bottom-bar @addCart='addcart'></detail-bottom-bar>

    </div>
      
</template>

<script>
    import DetailNavBar from '/src/views/detail/childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import DetailGoodsParams from './childComps/DetailGoodsParams'
    import DetailCommend from './childComps/DetailCommend'
    import GoodsList from '/src/components/content/goods/GoodsList'
    import DetailBottomBar from './childComps/DetailBottomBar'
    import BackTop from '/src/components/content/backtop/BackTop'

    import {
        getTopImage,
        Goods,
        Shop,
        GoodsParams,
        getRecommend
    } from '/src/network/detail'

    import Scroll from '/src/components/common/scroll/Scroll'

    export default {
        name: 'Detail',
        data() {
            return {
                iid: null,
                topimages: [],
                goods: {},
                shopInfo: {},
                detailInfo: {},
                goodsparams: {},
                commend: {},
                recommend: [],
                themeY: [0, 0, 0, 0],
                getThemeY: null,
                isShowBackTop: false,

            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            Scroll,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailGoodsParams,
            DetailCommend,
            GoodsList,
            DetailBottomBar,
            BackTop
        },

        created() {
            this.iid = this.$route.params.id;
            // this.getTopImage(this.iid);
            getTopImage(this.iid).then(res => {
                const data = res.result;
                // console.log(res);
                //获取轮播图图片
                this.topimages = data.itemInfo.topImages;
                //获取商品全面信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                //获取店铺信息
                this.shopInfo = new Shop(data.shopInfo)
                //获取商品详情信息
                this.detailInfo = data.detailInfo;
                //获取商品参数信息
                this.goodsparams = new GoodsParams(data.itemParams.info, data.itemParams.rule)
                //获取评论信息
                this.commend = data.rate.list[0];
            }),

                getRecommend().then(res => {
                    // console.log(res);
                    this.recommend = res.data.list
                })
               
        },
        mounted() {
            const refresh = this.debounce(this.$refs.scrolldetail.refresh, 500);
            this.$bus.$on('detailitemImageLoad', () => {
                // console.log('-----------');
                refresh();
                // this.$refs.scrolltop && this.$refs.scrolltop.refresh();
            })
        },
        activated() {

        },
        methods: {
            addcart(){
                // console.log('ddd');
                //获取购物车需要展示的信息
                const product = {};
                product.image = this.topimages[0];
                product.title = this.goods.title;
                product.desc = this.goods.desc;
                product.price = this.goods.realPrice;
                product.iid = this.iid;

                //将商品添加至购物车
                this.$store.commit('addCart',product);

            },
            backClick() {
                this.$refs.scrolldetail.scrollTo(0, 0)
            },
            scrollShow(position){
                // console.log(position);
                const positionY = -position.y;
                const length = this.themeY.length; 
                for(let i =0;i<length;i++){
                    if((i<length-1&&positionY>=this.themeY[i]&&positionY<=this.themeY[i+1])||
                    (i===length-1&&positionY>=this.themeY[i])){
                        // console.log(i)
                        this.$refs.nav.currentIndex = i;
                    }
                }
                this.isShowBackTop = (-position.y) > 1000;
            },
            itemClick(index){
                // console.log(index);
                this.$refs.scrolldetail.scrollTo(0,-this.themeY[index],100);
            },
            /* 
           防抖函数
           */
            debounce(func, delay) {
                let timer = null;
                return function (...args) {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(() => {
                        func.apply(this, args);
                    }, delay)
                }
            },

            imgLoad() {
                // this.$refs.scrolldetail.refresh();
                const refresh1 = this.debounce(this.$refs.scrolldetail.refresh, 500);
                refresh1();
                this.getThemeY = this.debounce(() => {
                    this.themeY = [];
                    this.themeY.push(0);
                    this.themeY.push(this.$refs.params.$el.offsetTop);
                    this.themeY.push(this.$refs.commend.$el.offsetTop);
                    this.themeY.push(this.$refs.recommend.$el.offsetTop);
                    console.log(this.themeY);
                }, 200);
                this.getThemeY();
            }
        }

    }
</script>

<style scoped>
    #detail
    {
    height:
    100vh;
    position:relative;
    z-index:
    999;
    background-color:
    #fff;
    }
    .detail_nav
    {
    position:
    relative;
    z-index:
    999;
    background-color:
    #fff;
    }
    .scroll-detail
    {
        height:
    calc(100vh - 44px - 49px);
    overflow: hidden;
    /*
    position:
    relative;
    z-index:
    999;
    background-color:
    #fff;
    */
    }

</style>