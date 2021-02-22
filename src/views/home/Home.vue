<template>
  <div id="home">
    <nav-bar class="nav_bar"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                  class="home_tab" @goodsClick="goodsClick"
                  ref="tabControl2" v-show="tabControlFixed"></tab-control>
    <scroll class="home_scroll"
            ref="scroll"
            :probe-type="3"
            @scroll="homeScroll"
            :pullUpLoad="true"
            @pullingUp="pullingUp">
      <home-swiper :banners="banners" class="home_swiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />

      <tab-control :titles="['流行', '新款', '精选']"
                   @goodsClick="goodsClick"
                   ref="tabControl1"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"/>

    <div class="seat"></div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import { getHomeMultidata, getHomeGoods } from '@/network/home'
import debounce from '@/common/debounce/debounce'
import { backTopMixin } from '@/common/mixin'

export default {
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  mixins: [backTopMixin],
  data () {
    return {
      banners: null,
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      getTabOffsetTop: 0,
      tabControlFixed: false,
      scrollY: 0
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('homeItemImageLoad', () => {
      refresh()
    })
  },
  activated () {
    this.$refs.scroll.scroll.scrollTo(0, this.scrollY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.scrollY = this.$refs.scroll.scroll.y
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.scroll.finishPullUp()
      })
    },
    goodsClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    /*
    滚动监听
    */
    // 监听位置
    homeScroll (position) {
      this.tabControlFixed = (-position.y) >= this.getTabOffsetTop
      this.isShowBackTop = (-position.y) > 1000
    },
    pullingUp () {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad () {
      this.getTabOffsetTop = this.$refs.tabControl1.$el.offsetTop
      // console.log(this.$refs.tabControl.$el.offsetTop)
    }
  }
  // updated () {
  //   this.imageFinish()
  // }
}

</script>
<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .nav_bar {
    background-color: #ff8198;
    color: #fff;
  }
  .home_scroll {
    /* overflow: hidden; */
    position: absolute;
    top: 12.232vw;
    bottom: 13.611vw;
    left: 0;
    right: 0;
  }
  .home_tab {
    position: relative;
    z-index: 9;
  }
  .seat{
    height: 14.722vw;
  }
</style>
