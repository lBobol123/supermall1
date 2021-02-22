<template>
  <div class="cart_list">

    <div class="cart_item" v-for="(item,index) in this.cartList" :key="index">
      <div class="check_tick_wraper" @click="selectChange(index)">
        <img class="check_tick" :class="{select: item.isSelect}" src="@/assets/img/cart/tick.svg" alt="">
      </div>
      <img class=cart_item_img :src="item.img" alt="">
      <div class="cart_item_info">
        <div class="item_info_title">{{item.title}}</div>
        <div class="item_info_desc">{{item.desc}}</div>
        <div class="item_info_bottom">
          <div class="item_price">￥{{item.price}}</div>
          <div class="item_bottom">
            <div class="purchase_count"
                 v-if="item.isShowCount"
                 @click="changeCount(index)">
              x{{item.count}}</div>
            <div class="change_count" v-else>
              <button class="sub" @click="subtraction(index)"
                      :disabled="item.count <= 1">-</button>
              <div class="item_count">{{item.count}}</div>
              <button class="add" @click="addition(index)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    ...mapGetters(['cartList'])
  },
  methods: {
    subtraction (index) {
      this.cartList[index].count--
    },
    addition (index) {
      this.cartList[index].count++
    },
    changeCount (index) {
      this.cartList[index].isShowCount = false
    },
    selectChange (index) {
      this.cartList[index].isSelect = !this.cartList[index].isSelect
    }
  }
}

</script>
<style scoped>
  .cart_item {
    display: flex;
    padding: 2.778vw 0 2.778vw;
    border-bottom: 0.278vw solid rgba(0, 0, 0, .1);
  }
  .check_tick_wraper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.389vw;
  }
  .check_tick {
    height: 5.556vw;
    border-radius: 50%;
    border: 0.556vw solid #aaa;
  }
  .select {
    background-color: #ff8198;
    border: 0.556vw solid #ff8198;
  }
  .cart_item_img {
    /* flex: 1; */
    width: 19.444vw;
    height: 23.056vw;
    border-radius: 1.389vw;
  }
  .cart_item_info {
    padding: 0 2.778vw 0;
    /* flex: 4; */
  }
  .item_info_title,
  .item_info_desc {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .item_info_title {
    margin-bottom: 2.778vw;
    color: #333;
  }
  .item_info_desc {
    color: #999;
    font-size: 3.611vw;
  }
  .item_info_bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 4.722vw;
    font-size: 3.889vw;
  }
  .item_price {
    color: #fc4e00;
  }
  .purchase_count {
    border: 0.278vw solid #b1b1b1;
    border-radius: 1.944vw;
    padding: 1.111vw 1.667vw;
    position: relative;
    bottom: 2.222vw;
    margin-right: 1.389vw;
  }
  .change_count {
    display: flex;
    border: 0.278vw solid #b1b1b1;
    border-radius: 2.222vw;
    position: relative;
    bottom: 2.222vw;
  }
  .sub,
  .add {
    margin: 1.111vw 2.778vw;
    background-color: #fff;
    border: none;
    outline: none;
  }
  .item_count {
    padding: 1.111vw 3.889vw;
    border-left: 0.278vw solid #b2b2b2;
    border-right: 0.278vw solid #b2b2b2;
  }
</style>
