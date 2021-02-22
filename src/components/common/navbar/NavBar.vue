<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .nav_bar {
    height: 12.222vw;
    line-height: 12.222vw;
    text-align: center;
    display: flex;
    font-size: 4.167vw;
    position: relative;
    /* top: 0; */
    width: 100%;
    z-index: 9;
    box-shadow: 0 0 0.278vw rgba(100, 100, 100, .5);
  }
  .left,
  .right {
    width: 16.667vw;
  }
  .center {
    flex: 1;
  }
</style>
