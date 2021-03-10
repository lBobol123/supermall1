<template>
  <div id="login">
    <img class="back" src="@/assets/img/back.svg" @click="backClick">
    <h1 class="title">狂购物</h1>
    <select-login />
    <div class="seat"></div>
  </div>
</template>

<script>
import SelectLogin from './SelectLogin'

export default {
  components: {
    SelectLogin
  },
  data () {
    return {
    }
  },
  methods: {
    backClick () {
      this.$router.back()
    }
  }
}

</script>
<style scoped>
  #login {
    position: relative;
    height: 100vh;
  }
  .back {
    width: 20px;
    margin: 10px 5px;
  }
  .title {
    font-size: 40px;
    text-align: center;
    color: #ff8198;
  }
  .seat {
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 13.86667vw;
    bottom: 0;
    z-index: 100;
  }
</style>
