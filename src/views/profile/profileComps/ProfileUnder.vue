<template>
  <div class="profile_under">
    <div class="under_item">
      <img src="@/assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
    </div>
    <div class="under_item">
      <img src="@/assets/img/profile/pointer.svg" alt="">
      <span>积分商城</span>
    </div>
    <div class="under_item vip">
      <img src="@/assets/img/profile/vip.svg" alt="">
      <span>会员卡</span>
    </div>
    <div class="under_item" @click="cartClick">
      <img src="@/assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span>
    </div>
    <div class="under_item">
      <img src="@/assets/img/profile/shopping.svg" alt="">
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    cartClick () {
      this.$router.push('/shopcart')
    }
  }
}

</script>
<style scoped>
  .profile_under {
    font-size: 3.73333vw;
  }
  .under_item {
    padding-left: 3.2vw;
    /* margin: 2.66667vw 0; */
    display: flex;
  }
  .under_item img{
    width: 5.33333vw;
    height: 5.33333vw;
    vertical-align: middle;
    margin-right: 2.13333vw;
    position: relative;
    top: 1.6vw;
  }
  .under_item span {
    flex: 1;
    padding: 2.66667vw 0;
    border-bottom: 0.26667vw solid #f4f4f4;
  }
  .vip {
    border-bottom: 4vw solid #f4f4f4;
  }
</style>
