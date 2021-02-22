<template>
  <div>
    <nav-bar class="detail_nav">
      <div class="back" slot="left" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center">
        <div class="title_item"
             v-for="(item, index) in titles" :key="item.index"
             @click="titleClick(index)"
             :class="{active: currentIndex === index}">
             {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick () {
      this.$router.back()
    }
  }
}

</script>
<style scoped>
  .detail_nav {
    background-color: #fff;
  }
  .back {
    margin-top: 1.389vw;
  }
  .back img {
    width: 5.556vw;
  }
  .title {
    display: flex;
    font-size: 3.889vw;
  }
  .title_item {
    flex: 1;
  }
  .active {
    color: #ff5777;
  }
</style>
