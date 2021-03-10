<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="!isActive"><slot name="tab-icon"></slot></div>
    <div v-else><slot name="tab-active-icon"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ff5777'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      // return this.$route.path.includes(this.path)
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}

</script>
<style scoped>
  .tab_bar_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3.889vw;
  }
  .tab_bar_item img {
    width: 6.667vw;
    height: 6.667vw;;
    vertical-align: middle;
    margin-bottom: 0.833vw;
  }
</style>
