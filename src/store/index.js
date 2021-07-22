import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);

const store = new vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payLoad) {
            // state.cartList.push(payLoad);
            let oldproduct = null;
            for (let item of state.cartList) {
                if (item.iid === payLoad.iid) {
                    oldproduct = item;
                }

            }
            if (oldproduct) {
                oldproduct.count += 1;
            } else {
                payLoad.count = 1;
                payLoad.checked = true;
                state.cartList.push(payLoad);
            }
        }
    },
   
})

export default store