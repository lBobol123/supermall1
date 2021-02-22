<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" :key="item.index"
         class="tab_control_item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['titles'],
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('goodsClick', index)
    }
  }
}

</script>
<style scoped>
  .tab_control {
    display: flex;
    text-align: center;
    height: 11.111vw;
    line-height: 11.111vw;
    font-size: 4.167vw;
    background-color: #fff;
    z-index: 9;
  }
  .tab_control_item {
    flex: 1;
  }
  .tab_control_item span {
    padding: 1.389vw;
  }
  .active {
    color: #ff8198;
  }
  .active span {
    border-bottom: 0.833vw solid #ff8198;
  }
</style>
