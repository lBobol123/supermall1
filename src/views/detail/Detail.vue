<template>
  <div id="detail">
    <detail-nav-bar ref="nav" @titleClick="titleClick"/>
    <scroll class="content" ref="scroll" @scroll="detailScroll" :probeType="3">
      <detail-swiper :topImages='topImages' v-if="topImages"/>
      <detail-base-info :itemInfo="itemInfo"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-goods-params ref="params" :itemParams="itemParams"/>
      <detail-comment ref="comment" :comment="comment"/>
      <goods-list ref="recommends" :goods="recommends"/>
    </scroll>
    <detail-bottom-nav @cartAdd="cartAdd"/>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import Scroll from '@/components/common/scroll/Scroll'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailGoodsParams from './childComps/DetailGoodsParams'
import DetailComment from './childComps/DetailComment'
import GoodsList from '@/components/content/goods/GoodsList'
import DetailBottomNav from './childComps/DetailBottomNav'

import { getDetail, Goods, Shop, GoodsParams, getComment } from '@/network/detail'
import debounce from '@/common/debounce/debounce'
import { backTopMixin } from '@/common/mixin'
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  mixins: [backTopMixin],
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailComment,
    GoodsList,
    DetailBottomNav
  },
  data () {
    return {
      iid: null,
      isShowBackTop: false,
      topImages: null,
      itemInfo: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      comment: {},
      recommends: {},
      themeTopYs: [],
      getThemeTopYs: null,
      currentIndex: null
    }
  },
  created () {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      // console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.itemInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.itemParams = new GoodsParams(data.itemParams)
      if (data.rate.cRate !== 0) {
        this.comment = data.rate.list[0]
      }
    })

    getComment().then(res => {
      this.recommends = res.data.list
      // console.log(this.recommends)
    })

    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs)
    }, 200)
  },
  mounted () {
    const refresh = debounce(this.imageLoad, 200)
    this.$bus.$on('detailItemImageLoad', () => {
      refresh()
    })
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad () {
      this.$refs.scroll.refresh()
      this.getThemeTopYs()
    },
    backTop () {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    detailScroll (position) {
      this.isShowBackTop = (-position.y) > 1000
      const detailTopYs = -position.y
      // if (detailTopYs < this.themeTopYs[1]) {
      //   this.currentIndex = 0
      // } else if (this.themeTopYs[1] <= detailTopYs && detailTopYs < this.themeTopYs[2]) {
      //   this.currentIndex = 1
      // } else if (this.themeTopYs[2] <= detailTopYs && detailTopYs < this.themeTopYs[3]) {
      //   this.currentIndex = 2
      // } else {
      //   this.currentIndex = 3
      // }
      const length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && (detailTopYs >= this.themeTopYs[i] && detailTopYs < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    titleClick (index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      // this.$toast.success('res')
    },
    // 添加购物车
    cartAdd () {
      const product = {
        title: this.itemInfo.title,
        desc: this.itemInfo.desc,
        price: this.itemInfo.realPrice,
        img: this.topImages[0],
        iid: this.$route.params.iid
      }
      this.addCart(product).then(res => {
        this.$toast.success(res)
      })
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res)
      // })
    }
  }
}

</script>
<style scoped>
  #detail {
    background-color: #fff;
    position: relative;
    z-index: 11;
    height: 100vh;
  }
  .content {
    position: absolute;
    top: 12.222vw;
    bottom: 13.611vw;
    left: 0;
    right: 0;
  }
</style>
