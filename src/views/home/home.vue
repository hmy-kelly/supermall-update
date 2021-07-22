<template>
      <div id="home">
        <nav-bar class="nav_home">
            <div slot="center">购物车</div>
        </nav-bar>

        <tab-control :titles='["流行","新款","精选"]' @TabClick='tabClick' ref='tabControl1'
        v-show='isFixed'
        class="tabC"
        >
        </tab-control>
        <scroll class="scroll" ref="scrolltop" @scrollshow='contentScroll' :probe-type='3' @pullingUp='loadMore'>
            <home-swiper :banners='banners' @imageLoad='imageLoad'></home-swiper>
            <home-recommend :recommend='recommend'></home-recommend>
            <feature-view></feature-view>
            <tab-control :titles='["流行","新款","精选"]' @TabClick='tabClick' ref='tabControl2'>
            </tab-control>
            <goods-list :goodslist='showgoods'></goods-list>
        </scroll>
        <back-top @click.native='backClick' v-show='isShowBackTop'></back-top>
    </div>
</template>

<script>

    import HomeSwiper from './childComps/HomeSwiper'
    import HomeRecommend from './childComps/HomeRecommend'
    import FeatureView from './childComps/FeatureView'

    import GoodsList from '/src/components/content/goods/GoodsList'

    import NavBar from '/src/components/common/navbar/NavBar'
    import TabControl from '/src/components/content/tabcontrol/TabControl'
    import Scroll from '/src/components/common/scroll/Scroll'
    import BackTop from '/src/components/content/backtop/BackTop'

    import {
        getHomeMultidata,
        getHomeGoods,
    } from '@/network/home';
    export default {
        name: 'home',
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommend,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        data() {
            return {
                banners: [],
                recommend: [],
                goods: {
                    'pop': { page: 0, list: [] },
                    'new': { page: 0, list: [] },
                    'sell': { page: 0, list: [] }

                },
                currentType: 'pop',
                isShowBackTop: false,
                isFixed:false,
                tabOffsetTop:0,
                saveY:0,
        

            }
        },
        computed: {
            showgoods() {
                return this.goods[this.currentType].list;
            }
        },
        created() {
            this.getHomeMultidata();

            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');
        },
        activated(){
            /* 
            再次进入页面时，将scroll的Y值设置为上一次离开时的saveY值
            */

           this.$refs.scrolltop.refresh();
            this.$refs.scrolltop.scrollTo(0,this.saveY,0);           

        },
        deactivated(){
            /* 
            离开页面时，保存当前scroll的Y值到saveY变量中
            */
           this.saveY = this.$refs.scrolltop.scroll.y;

        },
        mounted() {
            /* 
            不能在mounted中获取tabControl的offsetTop值，因为虽然组件挂载了，但是图片是异步请求
            组件挂载完成后图片不一定请求过来，所以此处的offsetTop有可能是不包含图片的offsetTop
            */
            // console.log(this.$refs.tabControl.$el.offsetTop);

            // console.log('mounted');
            // console.log(this.$refs.scroll);

            /* 
            调用防抖函数debounce时出现refresh undefined
            在mounted函数中直接输出this.$refs.scroll显示的也是undefined
            Tips:这里获取scroll组件时产生错误，应该是this.$refs.scrolltop而不是this.$refs.scroll
            */
            const refresh = this.debounce(this.$refs.scrolltop.refresh,500);
            this.$bus.$on('homeitemImageLoad', () => {
                // console.log('-----------');
                refresh();
                // this.$refs.scrolltop && this.$refs.scrolltop.refresh();
            })
        },

        methods: {
            /* 
            加载页面图片完成后以便获取tabControl的offsetTop值
            */
            imageLoad() {
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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

            backClick() {
                this.$refs.scrolltop.scrollTo(0, 0)
            },
            contentScroll(position) {
                /* 
                判断什么位置显示backTop
                */
                // console.log(position);
                this.isShowBackTop = (-position.y) > 1000;

                /* 
                判断什么位置让tabControl有fixed属性
                */
               this.isFixed = (-position.y) > this.tabOffsetTop;
            },
            loadMore() {
                // console.log("上拉加载更多");
                this.getHomeGoods(this.currentType);

            },

            /* 
            子组件TabControl传过来的方法
            */
            tabClick(index) {
                //    console.log(index);
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break;
                    case 1:
                        this.currentType = 'new'
                        break;
                    case 2:
                        this.currentType = 'sell'

                }
                this.$refs.tabControl1.currentIndex = index;
                this.$refs.tabControl2.currentIndex = index;
            },


            /*  
            网络请求的相关方法
            */
            getHomeMultidata() {
                getHomeMultidata().then(res => {
                    //    console.log(res);
                    this.banners = res.data.banner.list;
                    this.recommend = res.data.recommend.list;
                })

            },
            getHomeGoods(type) {
                const page = this.goods[type].page + 1;
                getHomeGoods(type, page).then(res => {
                    // console.log(res);
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;
                    this.$refs.scrolltop.finishPullUp();
                })
            }

        }
    }


</script>

<style scoped>
    #home {
        /* padding-top: 44px; */
        position: relative;
        height: 100vh;
    }

    .nav_home {
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom:44px; */
        z-index: 999;
        color: #fff;
        background-color: var(--color-tint);
    }

    .scroll {
        height: calc(100vh - 44px - 49px);
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
        bottom: 49px;
    }

    /* .fixed{
        position: fixed;
        left: 0;
        right: 0;
        top: 44px;
    } */

    .tabC{
        position: relative;
        top: 0;
        right: 0;
        left: 0;
        z-index: 999;
    }
</style>