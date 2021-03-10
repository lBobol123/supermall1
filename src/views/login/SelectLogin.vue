<template>
  <div class="select_login">
    <div class="select_mode">
      <span :class="{active: isActive}" @click="selectClick">短信登录</span>
      <span :class="{active: !isActive}" @click="selectClick">密码登录</span>
    </div>
    <div>
      <div v-if="isActive" class="message">
        <input v-model="telephone" type="text" placeholder="手机号">
        <input type="text" placeholder="验证码">
        <div class="tips">温馨提示：未注册狂购物账号的手机号，登录时将自动注册，且代表已同意<span>《用户服务协议》</span></div>
        <span v-if="gettingCode" class="code" :class="{code_true: phoneRight}"
              @click="codeClick">获取验证码</span>
        <span v-else class="code" >已发送({{countdown}}s)</span>
      </div>
      <div v-else class="message">
        <input v-model="username" type="text" placeholder="手机/邮箱/用户名">
        <input v-if="!isShowPassword" maxlength="16"
               v-model="password" type="password" placeholder="密码">
        <input v-else maxlength="16" v-model="password"
               type="text" placeholder="密码">
        <van-switch class="switch" v-model="checked"
                    size="18px" active-color="#ff8198"
                    @change="change"/>
        <input type="text" placeholder="验证码">
        <!-- <img @click="getCaptcha" src="http://localhost:4000/captcha" alt=""> -->
      </div>
    </div>
    <div class="btn_wrapper">
      <div class="loginBtn" @click="loginClick">登录</div>
    </div>
    <div class="about">关于我们</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      isActive: false, // 登录方式
      telephone: '', // 电话号
      gettingCode: true, // 是否发送验证码
      countdown: 6, //  倒计时
      isShowPassword: false, // 是否展示密码
      username: '', //  用户名
      password: '', // 密码
      checked: false // 是否显示密码
    }
  },
  computed: {
    phoneRight () {
      const rulg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      return rulg.test(this.telephone)
    }
  },
  methods: {
    selectClick () {
      this.isActive = !this.isActive
    },
    codeClick () {
      if (this.phoneRight) {
        this.gettingCode = false
      }
      const timer = setInterval(() => {
        this.countdown--
        if (this.countdown <= 0) {
          clearInterval(timer)
          this.gettingCode = true
          this.countdown = 6
        }
      }, 1000)
    },
    async loginClick () {
      if (this.username && this.password) {
        const res = await this.$http.post('/login', {
          username: this.username,
          password: this.password
        })
        console.log(res)
        if (res.data.code === 200) {
          this.$toast.success(res.data.msg)
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('token', res.data.token)
          this.$router.push('/profile')
        } else {
          this.$toast.fail(res.data.msg)
        }
      } else {
        this.$toast.fail('请输入用户名')
      }
    },
    change () {
      this.isShowPassword = !this.isShowPassword
    },
    // 点击刷新验证码
    getCaptcha (event) {
      event.target.src = 'http://localhost:4000/captcha?time=' + Date.now()
    }
  }
}

</script>
<style scoped>
  .select_login {
    width: 100vw;
  }
  .select_mode {
    text-align: center;
    /* margin-bottom: 15px; */
  }
  .select_mode span {
    margin: 0 20px;
    padding: 3px 0;
  }
  .active {
    color: #ff8198;
    border-bottom: 3px solid #ff8198;
  }
  .message {
    margin: 0 40px;
    position: relative;
  }
  .message input {
    width: 100%;
    padding: 12px 8px;
    border: 1px solid #dededd;
    border-radius: 3px;
    margin-top: 18px;
    font-size: 14px;
  }
  .tips {
    font-size: 14px;
    line-height: 20px;
    color: #999;
    margin-top: 15px;
  }
  .tips span {
    color: #ff8198;
  }
  .code {
    position: absolute;
    top: 18px;
    right: 0;
    margin: 14px 15px 13px 5px;
    font-size: 14px;
    color: rgb(168, 167, 167);
  }
  .switch {
    position: absolute;
    top: 93px;
    right: 16px;
  }
  .btn_wrapper {
    display: flex;
  }
  .loginBtn {
    flex: 1;
    margin: 20px 40px;
    box-sizing: border-box;
    padding: 11px;
    background-color: #ff8198;
    color: #fff;
    text-align: center;
    border-radius: 5px;
  }
  .about {
    text-align: center;
    color: #999;
    font-size: 13px;
  }
  .code_true {
    color: #333;
  }
</style>
