<template>
  <div class="base_info" v-if="Object.keys(itemInfo).length !== 0">
    <div class="info_title">{{itemInfo.title}}</div>
    <div class="info_price">
      <span class="n_price">{{itemInfo.newPrice}}</span>
      <span class="o_price">{{itemInfo.oldPrice}}</span>
      <span class="discount">{{itemInfo.discount}}</span>
    </div>
    <div class="info_other">
      <span>{{itemInfo.columns[0]}}</span>
      <span>{{itemInfo.columns[1]}}</span>
      <span>{{itemInfo.services[itemInfo.services.length-1].name}}</span>
    </div>
    <div class="info_services">
      <span v-for="index in itemInfo.services.length - 1" :key="index">
        <img :src="itemInfo.services[index-1].icon" alt="">
        <span>{{itemInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['itemInfo'],
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .base_info {
    padding: 2.778vw 2.222vw 0;
    border-top: 1.389vw solid #f2f5f8;
    border-bottom: 1.389vw solid #f2f5f8;
  }
  .info_title {
    color: #222;
    font-size: 5vw;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 2.222vw;
  }
  .n_price {
    color: #ff5777;
    font-size: 7.222vw;
  }
  .o_price {
    color: #999;
    font-size: 3.611vw;
    text-decoration: line-through;
    margin-left: 1.389vw;
  }
  .discount {
    color: #fff;
    background-color: #ff5777;
    font-size: 3.333vw;
    border-radius: 2.222vw;
    margin-left: 1.389vw;
    padding: 0.556vw 1.389vw;
    position: relative;
    top: -2.222vw;
  }
  .info_other {
    display: flex;
    justify-content: space-between;
    margin-top: 4.167vw;
    color: #999;
    font-size: 3.611vw;
    padding-bottom: 2.222vw;
    border-bottom: 0.278vw solid rgba(100, 100, 100, .1);
  }
  .info_services {
    display: flex;
    justify-content: space-between;
    font-size: 3.611vw;
    color: #333;
    height: 16.667vw;
    line-height: 16.667vw;
  }
  .info_services img {
    width: 3.611vw;
    vertical-align: middle;
    padding-bottom: 0.278vw;
  }
</style>
