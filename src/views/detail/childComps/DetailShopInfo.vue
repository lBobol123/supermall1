<template>
  <div class="shop_info">
    <div class="shop_top">
      <div class="shop_logo">
        <img :src="shop.shopLogo" alt="">
        <span class="title">{{shop.name}}</span>
      </div>
      <div class="shop_fans">粉丝：{{shop.fans}}</div>
    </div>
    <div class="shop_middle">
      <!-- shop左边 -->
      <div class="shop_middle_left">
        <div class="shop_sells">
          <div class="sells_count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells_text">总销量</div>
        </div>
        <div class="shop_goods">
          <div class="goods_count">{{shop.goods}}</div>
          <div class="goods_text">全部宝贝</div>
        </div>
      </div>
      <!-- shop右边 -->
      <div class="shop_middle_right">
        <table>
          <tr v-for="item in shop.score" :key="item.index">
            <td>{{item.name}}</td>
            <td class="score" :class="{score_better: item.isBetter}">{{item.score}}</td>
            <td><span class="better" :class="{better_more: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop_bottom">
      <div class="enter_shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['shop'],
  data () {
    return {
    }
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value
      return (value / 10000).toFixed(1) + '万'
    }
  }
}

</script>
<style scoped>
  .shop_info {
    padding: 6.944vw 2.222vw;
    border-bottom: 1.389vw solid #f2f5f8;
  }
  .shop_logo {
    line-height: 12.5vw;
    display: flex;
  }
  .shop_logo img {
    width: 12.5vw;
    height: 12.5vw;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
  }
  .shop_logo .title {
    margin-left: 2.778vw;
  }
  .shop_fans {
    font-size: 3.611vw;
    color: #999;
  }
  .shop_middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
  }
  .shop_middle_left {
    flex: 1;
    display: flex;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }
  .shop_sells,
  .shop_goods {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sells_text,
  .goods_text {
    font-size: 3.333vw;
    margin-top: 2.778vw;
  }
  .sells_count,
  .goods_count {
    font-size: 5vw;
  }
  .shop_middle_right {
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: 3.611vw;
    color: #333;
  }
  .shop_middle_right table {
    width: 33.333vw;
  }
  .shop_middle_right table td {
    padding: 1.111vw 0;
  }
  .score {
    color: #5ea732;
  }
  .score_better {
    color: #f13e3a
  }
  .better {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .better_more {
    background-color: #f13e3a;
    color: #fff;
    text-align: center;
  }
  .shop_bottom {
    text-align: center;
    margin-top: 2.778vw;
  }
  .enter_shop {
    display: inline-block;
    width: 41.667vw;
    height: 8.333vw;
    line-height: 8.333vw;
    background-color: #f2f5f8;
    border-radius: 4.167vw;
    font-size: 3.611vw;
  }
</style>
