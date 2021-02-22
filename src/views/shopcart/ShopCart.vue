<template>
  <div id="shop_cart">
    <nav-bar class="cart_nav"><div slot="center">购物车({{cartCount}})</div></nav-bar>
    <cart-list/>
    <cart-bottom-bar/>

    <div class="seat"></div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

export default {
  name: 'ShopCart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data () {
    return {
    }
  },
  computed: {
    cartCount () {
      let cartCount = 0
      for (const item of this.$store.state.cartList) {
        cartCount += item.count
      }
      return cartCount
    }
  }
}

</script>
<style scoped>
  .cart_nav {
    position: sticky;
    top: 0;
    background-color: #ff8198;
    color: #fff;
  }
  .seat{
    height: 13.611vw;
    width: 100%;
  }
</style>
