<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.index" class="recomments_item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    recommends: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .recommends{
    display: flex;
    width: 100%;
    padding: 2.778vw 0 5.556vw;
    border-bottom: 2.222vw solid #eee;
  }
  .recomments_item {
    flex: 1;
    font-size: 3.333vw;
    text-align: center;
  }
  .recomments_item img {
    width: 19.444vw;
    height: 19.444vw;
    vertical-align: middle;
    margin-bottom: 3.611vw;
  }
</style>
