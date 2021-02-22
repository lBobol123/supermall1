<template>
  <swiper class="detail_swiper">
    <swiper-item v-for="item in topImages" :key="item.index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: ['topImages'],
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .detail_swiper {
    height: 105.556vw;
    width: 100%;
    overflow: hidden;
  }
</style>
