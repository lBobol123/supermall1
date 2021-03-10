<template>
  <div class="profile_info">
    <div class="info_item">
      <div>
        <span class="item_count">0.00</span>
        <span>元</span>
      </div>
      <div>我的余额</div>
    </div>
    <div class="info_item">
      <div>
        <span class="item_count">0</span>
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="info_item">
      <div>
        <span class="item_count">0</span>
        <span>分</span>
      </div>
      <div>我的积分</div>
    </div>
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
  .profile_info {
    display: flex;
    border-bottom: 4vw solid #f4f4f4;
  }
  .info_item {
    padding: 4vw 0;
    flex: 1;
    border-right: 0.26667vw solid #f4f4f4;
    font-size: 3.73333vw;
  }
  .info_item div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item_count {
    margin-bottom: 1.33333vw;
    font-size: 5.86667vw;
    color: #f74e15;
  }
</style>
