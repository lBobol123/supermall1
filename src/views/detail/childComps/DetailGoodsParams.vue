<template>
  <div class="goods_params" v-if="Object.keys(itemParams).length !== 0">
    <table class="info_size">
      <tr v-for="tr in itemParams.tables" :key="tr.index">
        <td v-for="td in tr" :key="td.index">{{td}}</td>
      </tr>
    </table>
    <table class="info_params">
      <tr v-for="item in itemParams.set" :key="item.index">
        <td class="info_params_key">{{item.key}}</td>
        <td class="info_params_value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: ['itemParams'],
  data () {
    return {
    }
  }
}

</script>
<style scoped>
  .goods_params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .goods_params table {
    border-collapse: collapse;
    width: 100%;
  }
  .goods_params table tr {
    height: 42px;
  }
  .goods_params td {
    border-bottom: 1px solid rgba(100, 100, 100, .2);}
  .info_params {
    border-top: 1px solid rgba(0, 0, 0, .2);
  }
  .info_params_key {
    width: 95px;
  }
  .info_params_value {
    color: #eb4747;
  }
</style>
