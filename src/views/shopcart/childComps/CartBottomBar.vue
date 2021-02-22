<template>
  <div>
    <div class="cart_bottom_bar">
      <div class="cart_bottom_left">
        <img class="cart_bottom_tick" src="@/assets/img/cart/tick.svg"
            :class="{check: isAllSelect}" @click="selectClick">
        <span class="all_check">全选</span>
        <span class="cart_total">合计:￥{{totalPrice}}</span>
      </div>
      <div class="cart_bottom_right">结算({{selectCount}})</div>
    </div>
    <div class="cart_seat"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    selectCount () {
      return this.cartList.filter(item => item.isSelect).reduce((preValue, n) => preValue + n.count, 0)
    },
    totalPrice () {
      return this.cartList.filter(item => item.isSelect).reduce((preValue, n) => preValue + n.count * n.price, 0).toFixed(2)
    },
    isAllSelect () {
      return this.cartList.every(item => item.isSelect)
    }
  },
  methods: {
    selectClick () {
      // this.isAllSelect = !this.cartList.every(item => item.isSelect)
      // for (const item of this.$store.state.cartList) {
      //   item.isSelect = this.isAllSelect
      // }
      if (this.isAllSelect) {
        this.cartList.forEach(item => { item.isSelect = false })
      } else {
        this.cartList.forEach(item => { item.isSelect = true })
      }
    }
  }
}

</script>
<style scoped>
  .cart_bottom_bar {
    display: flex;
    height: 11.111vw;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 13.611vw;
  }
  .cart_bottom_left {
    flex: 5;
    display: flex;
    align-items: center;
    background-color: #eaeae9;
  }
  .cart_bottom_tick {
    height: 5.556vw;
    border: 0.556vw solid #aaa;
    border-radius: 50%;
    vertical-align: middle;
    margin-left: 3.333vw;
  }
  .check {
    border: 0.556vw solid #ff8198;
    background-color: #ff8198;;
  }
  .all_check {
    margin-left: 1.389vw;
    font-size: 3.889vw;
    color: #666;
  }
  .cart_total {
    margin-left: 4.167vw;
  }
  .cart_bottom_right {
    flex: 2;
    color: #fff;
    text-align: center;
    background-color: #ff4900;
    line-height: 11.111vw;
  }
  .cart_seat {
    position: relative;
    height: 11.111vw;
    bottom: 0;
    width: 100%;
  }
</style>
