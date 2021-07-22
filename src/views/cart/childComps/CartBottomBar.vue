<template>
    <div class="cart-bar">
        <div class="cartleft">
            <!-- <img src="@/assets/imgs/cart/tick.svg" alt="" class="cartimg"> -->
            <check-button 
            @click.native='checkClick'
            :ischecked='getChecked'
           ></check-button>
            <span>全选</span>
        </div>
        <div class="cartcenter">
            合计：￥{{getCount}}
        </div>
        <div class="cartright">
            去结算:({{cartlength}})
        </div>

    </div>
      
</template>

<script>
    import CheckButton from '/src/components/content/checkButton/CheckButton'
    export default {
        name: 'CartBottomBar',
        components:{
            CheckButton,
        },
        computed: {
            getCount() {
                var count = 0;
                for (let i = 0; i < this.$store.state.cartList.length; i++) {
                    // console.log(count.toFixed(2));
                    if(this.$store.state.cartList[i].checked){
                        count += (this.$store.state.cartList[i].price*1);
                    } 
                }
                return count;
            },
            cartlength() {
                var length = 0;
                for(let i = 0; i < this.$store.state.cartList.length; i++){
                    if(this.$store.state.cartList[i].checked){
                        length++;
                    }
                }
                return length;

            },
            getChecked(){
                if(this.$store.state.cartList.length===0){
                        return false;
                    }
                for(let i = 0; i < this.$store.state.cartList.length; i++){
                    if(!this.$store.state.cartList[i].checked){
                        return false;
                    }
                }
                return true;
            }
        },
        methods:{
            checkClick(){
                if(this.getChecked){
                    this.$store.state.cartList.forEach(item=>item.checked=false);
                }
                else{
                    this.$store.state.cartList.forEach(item=>item.checked=true);
                }
                // this.$store.commit('getcheckclick',{});
                // console.log(this.$store);
}
        }
        
    }
</script>

<style scoped>
    .cart-bar
    {
    
    background-color:
    #fff;
   
    height:
    40px;
    position:
    relative;
    bottom:
    40px;
    
    display:
    flex;
    font-size:
    13px;
    }
    .cartleft
    {
    width:
    60px;
    /* height: 20px; */
    margin-left: 10px;
    margin-right:
    10px;
    /* line-height:
    20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .cartcenter
    {
    flex:
    1;
    line-height:
    40px;
    }
    .cartright
    {
    width:
    80px;
    background-color:
    var(--color-tint);
    text-align:
    center;
    line-height:
    40px;
    }

</style>