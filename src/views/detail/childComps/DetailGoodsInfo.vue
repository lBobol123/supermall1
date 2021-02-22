<template>
  <div class="goods_info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goods_desc">
      <div class="desc_top"></div>
      <div class="desc_text">{{detailInfo.desc}}</div>
      <div class="desc_bottom"></div>
    </div>
    <div class="goods_key">{{detailInfo.detailImage[0].key}}</div>
    <div class="goods_list"
         v-for="item in detailInfo.detailImage[0].list"
         :key="item.index">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['detailInfo'],
  data () {
    return {
    }
  },
  methods: {
    imgLoad () {
      this.$emit('imageLoad')
    }
  }
}

</script>
<style scoped>
  .goods_info {
    padding-top: 15px;
  }
  .goods_desc {
    padding: 0 15px;
  }
  .desc_top,
  .desc_bottom {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .desc_bottom {
    float: right;
  }
  .desc_top::before {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
  }
  .desc_text {
    padding: 15px 0;
    font-size: 14px;
  }
  .desc_bottom::after {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .goods_key {
    padding: 10px 0 15px 10px;
    font-size: 15px;
    color: #333;
  }
  .goods_list img{
    width: 100%;
  }
</style>
