<template>
      <div>
        <nav-bar>
            <div slot="left" class="nav_bar_left" @click='backClick'>
                <img src="@/assets/imgs/common/back.svg" alt="">
            </div>

            <div slot="center" class="nav_bar_center">
                <div v-for='(item,index) in titles' class="nav_bar_item" :class='{active:index===currentIndex}'
                    @click='itemClick(index)'>
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from '/src/components/common/navbar/NavBar'
    export default {
        name: 'DetailNavBar',
        components: {
            NavBar,
        },
        data() {
            return {
                titles: ['详情', '参数', '评价', '推荐'],
                currentIndex: 0,
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                this.$emit('itemClick',index)
            },
            backClick() {
                this.$router.back();
            }
        },
    }
</script>

<style scoped>
    .nav_bar_left
    img
    {
    margin-top:
    12px;
    }
    .nav_bar_center
    {
    display:
    flex;
    font-size:
    12px;
    }
    .nav_bar_item
    {
    flex:1;
    justify-content:
    space-evenly;
    }
    .active {
    color:
    var(--color-high-text);
    }
</style>