<template>
  <div class="goods_list_item" @click="goodsClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods_info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['goodsitem'],
  data () {
    return {
    }
  },
  computed: {
    showImage () {
      return this.goodsitem.image || this.goodsitem.show.img
    }
  },
  methods: {
    imageLoad () {
      if (this.$route.path.indexOf('/home')) {
        this.$bus.$emit('homeItemImageLoad')
      } else if (this.$route.path.indexOf('/detail')) {
        this.$bus.$emit('detailItemImageLoad')
      }
    },
    goodsClick () {
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  }
}

</script>
<style scoped>
  .goods_list_item {
    position: relative;
    width: 48%;
    padding-bottom: 11.111vw;
    font-size: 3.333vw;
  }
  .goods_list_item img {
    width: 100%;
    border-radius: 1.389vw;
  }
  .goods_info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1.389vw;
    text-align: center;
  }
  .goods_info p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: 0.833vw;
  }
  .price {
    color: #ff8198;
    margin-right: 5.556vw;
  }
  .collect {
    position: relative;
  }
  .collect::before {
    content: '';
    position: absolute;
    left: -4.167vw;
    top: -0.278vw;
    width: 3.889vw;
    height: 3.889vw;
    background: url('../../../assets/img/common/collect.svg') 0 0/3.889vw 3.889vw;
  }
</style>
