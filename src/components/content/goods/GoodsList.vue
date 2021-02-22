<template>
  <div class="goods_list">
    <goods-list-item v-for="item in goods" :key="item.index" :goodsitem="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  components: {
    GoodsListItem
  },
  props: ['goods'],
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .goods_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #fff;
  }
</style>
