<template>
      <div id="maintabbar">
      <!-- <router-view></router-view> -->
      <tab-bar>
        <tabbar_item path="/home">
          <img slot="tabbar_icon" src="@/assets/imgs/tabbar/home.svg" alt="">
          <img slot="tabbar_icon_active" src="@/assets/imgs/tabbar/home_active.svg" alt="">
          <div slot="tabbar_text">首页</div>
        </tabbar_item>
        <tabbar_item path="/category">
          <img slot="tabbar_icon" src="@/assets/imgs/tabbar/category.svg" alt="">
          <img slot="tabbar_icon_active" src="@/assets/imgs/tabbar/category_active.svg" alt="">
          <div slot="tabbar_text">类别</div>
        </tabbar_item>
        <tabbar_item path="/cart">
          <img slot="tabbar_icon" src="@/assets/imgs/tabbar/shopcart.svg" alt="">
          <img slot="tabbar_icon_active" src="@/assets/imgs/tabbar/shopcart_active.svg" alt="">
          <div slot="tabbar_text">购物车</div>
        </tabbar_item>
        <tabbar_item path="/profile">
          <img slot="tabbar_icon" src="@/assets/imgs/tabbar/profile.svg" alt="">
          <img slot="tabbar_icon_active" src="@/assets/imgs/tabbar/profile_active.svg" alt="">
          <div slot="tabbar_text">我的</div>
        </tabbar_item>
      </tab-bar>
    </div>
  </template>
  
  <script>
    import tabBar from '../../common/tabbar/tabbar'
    import tabbar_item from '../../common/tabbar/tabbar_item'
  
    export default {
      name: 'maintabbar',
      components: {
        tabBar,
        tabbar_item,
      }
    }
  </script>
  
  <style>
  
  </style>