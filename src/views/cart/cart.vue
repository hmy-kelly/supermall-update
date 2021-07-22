<template>
      <div class="nav">
        <nav-bar class='nav-bar'>
            <div slot="center">购物车({{cartListLength}})</div>
        </nav-bar>
        <div class="cart-list">
            <scroll class="scrollcart" ref='scrollcart'>
                <cart-list></cart-list>
            </scroll>         
        </div>
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
    import NavBar from '/src/components/common/navbar/NavBar'
    import CartList from './childComps/CartList'
    import Scroll from '/src/components/common/scroll/Scroll'
    import CartBottomBar from './childComps/CartBottomBar'

    export default {
        name: 'cart',
        computed: {
            cartListLength() {
                return this.$store.state.cartList.length;
            }
        },
        components: {
            NavBar,
            CartList,
            Scroll,
            CartBottomBar,
        },
        activated(){
            this.$refs.scrollcart.refresh();
        }
    }
</script>

<style>
    .nav-bar {
        background-color: var(--color-tint);
        color: #fff;
    }
/* .scrolldiv{
    height: calc(100vh - 44px - 49px);
} */
.cart-list{
    height: calc(100vh - 44px - 49px);
}
    .scrollcart {
        height: 100%;
        overflow: hidden;
    }
</style>