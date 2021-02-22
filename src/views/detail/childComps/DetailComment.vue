<template>
  <div class="comment" v-if="Object.keys(comment).length !== 0">
    <div class="comment_header">
      <div class="comment_title">用户评价</div>
      <div class="comment_more">更多</div>
    </div>
    <div class="comment_user">
      <img :src="comment.user.avatar" alt="">
      <div class="comment_username">{{comment.user.uname}}</div>
    </div>
    <div class="comment_info">
      <div class="comment_content">{{comment.content}}</div>
      <div class="comment_other">
        <span>{{comment.created | showDate}}</span>
        <!-- <span>{{showDate(comment.created)}}</span> -->
        <span>{{comment.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import { formatDate } from '@/common/utils'

export default {
  components: {
  },
  props: ['comment'],
  data () {
    return {
    }
  },
  filters: {
    showDate (value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy/MM/dd hh:mm:ss')
    }
  }
  // methods: {
  //   showDate (value) {
  //     const date = new Date(value * 1000)
  //     return formatDate(date, 'yyyy/MM/dd hh:mm:ss')
  //   }
  // }
}

</script>
<style scoped>
  .comment {
    padding: 0 2.778vw 0;
  }
  .comment_header {
    display: flex;
    justify-content: space-between;
    height: 13.889vw;
    line-height: 13.889vw;
    color: #333;
    border-bottom: 0.278vw solid rgba(0, 0, 0, .1);
  }
  .comment_title {
    font-size: 4.167vw;
  }
  .comment_more {
    font-size: 3.611vw;
    margin-right: 2.778vw;
  }
  .comment_user {
    padding: 2.778vw 0 2.778vw;
    display: flex;
  }
  .comment_user img {
    width: 11.667vw;
    border-radius: 50%;
  }
  .comment_username {
    position: relative;
    top: 4.167vw;
    margin-left: 2.778vw;
    color: #333;
    font-size: 4.167vw;
  }
  .comment_info {
    padding: 0 1.389vw 4.167vw;
  }
  .comment_content {
    font-size: 3.889vw;
    line-height: 1.5;
    color: #777;
  }
  .comment_other {
    font-size: 3.333vw;
    margin-top: 2.778vw;
    color: #999;
    display: flex;
    justify-content: space-between;
  }
</style>
