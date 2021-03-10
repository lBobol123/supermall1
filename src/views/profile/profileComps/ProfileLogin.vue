<template>
  <div class="profile_login">
    <img class="profile_head" src="@/assets/img/profile/avatar.svg" alt="">
    <div class="login" @click="loginClick">
      <p>登录/注册</p>
      <div class="phone">
        <img src="@/assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <img @click="loginClick" class="arrow" src="@/assets/img/profile/arrow.svg" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    loginClick () {
      this.$router.push('/login')
    }
  }
}

</script>
<style scoped>
  .profile_login {
    background-color: #ff8198;
    padding: 2.66667vw;
    display: flex;
    align-items: center;
  }
  .profile_head {
    width: 16vw;
    height: 16vw;
    margin-left: 1.33333vw;
  }
  .login {
    flex: 1;
    color: #fff;
    margin-left: 3.2vw;
  }
  .login p {
    margin-left: 1.33333vw;
  }
  .phone {
    display: flex;
    align-items: center;
    padding-top: 1.33333vw;
    font-size: 3.46667vw;
  }
  .phone img {
    height: 4.8vw;
    vertical-align: middle;
  }
  .arrow {
    width: 5.33333vw;
    height: 5.33333vw;
  }
</style>
