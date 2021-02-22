<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  #tab_bar {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 13.611vw;
    background-color: #f6f6f6;
    box-shadow: 0 0 1px rgba(100, 100, 100, .1);
    z-index: 10;
  }
</style>
