<template>
  <div class="bottom_nav">
    <div class="nav_left">
      <div>
        <img src="@/assets/img/detail/customer.svg" alt="" class="nav_left_icon">
        <div class="nav_left_text">客服</div>
      </div>
      <div>
        <img src="@/assets/img/detail/shop.svg" alt="" class="nav_left_icon">
        <div class="nav_left_text">店铺</div>
      </div>
      <div @click="isShowCollectIcon">
        <img v-if="showCollectIcon" src="@/assets/img/detail/collect.svg" alt="" class="nav_left_icon">
        <img v-else src="@/assets/img/detail/active-collect.svg" alt="" class="nav_left_icon">
        <div class="nav_left_text">收藏</div>
      </div>
    </div>
    <div class="nav_right">
      <div class="nav_right_cart" @click="cartAdd">加入购物车</div>
      <div class="nav_right_buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      showCollectIcon: true
    }
  },
  methods: {
    isShowCollectIcon () {
      this.showCollectIcon = !this.showCollectIcon
    },
    cartAdd () {
      this.$emit('cartAdd')
    }
  }
}

</script>
<style scoped>
  .bottom_nav {
    position: fixed;
    bottom: 0;
    height: 13.611vw;
    left: 0;
    right: 0;
    display: flex;
    z-index: 100;
  }
  .nav_left {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #fff;
    font-size: 3.611vw;
    display: flex;
    justify-content: space-around;
    color: #333;
  }
  .nav_left_icon {
    width: 7.222vw;
  }
  .nav_right {
    flex: 1;
    display: flex;
  }
  .nav_right_cart {
    flex: 1;
    background-color: #ffd808;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.889vw;
  }
  .nav_right_buy {
    flex: 1;
    background-color: #ff8198;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
</style>
