<template>
  <swiper v-if="banners">
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'
// import debounce from '@/common/debounce/debounce'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array
    }
  },
  data () {
    return {
      isLoad: true
    }
  },
  mounted () {
  },
  methods: {
    imageLoad () {
      if (this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = !this.isLoad
      }
    }
  }
}

</script>
<style scoped>

</style>
