<template>
  <div>
    <div class="warp">
      <form v-on:submit.prevent="login">
        <mu-text-field label="浮动标签" v-model="form.email" labelFloat fullWidth/><br/>
        <mu-text-field label="密码" hintText="请输入密码" v-model="form.password" type="password" labelFloat fullWidth/><br/>
        <div class="line">
            <mu-checkbox label="记住我" class="member" primary/>
            <mu-flat-button label="忘记密码？" class="demo-flat-button" primary/>
        </div>
        <mu-raised-button @click="login()" label="login" class="login-button" fullWidth/>
      </form>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: null
      },
      sending: false
    }
  },
  methods: {
    login: function () {
      axios.post('http://api.share.localhost/oauth/token', {
        grant_type: 'password',
        client_secret: 'iiy3sLJEX6gSed7qQuLbcuBMROenMTvFiG4p6hRa',
        client_id: '4',
        username: 'passwoo@163.com',
        password: '123456'
      })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  .member .mu-checkbox-icon-uncheck {
      color: rgba(125, 125, 125, 0.87);
  }

  .login-button {
    color: #fff;
    background-color: #2196f3;
    margin-top: 10px;
    height: 50px;

    .mu-raised-button-wrapper {
      height: 50px;
    }
  }

  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .warp {
    max-width: 400px;
    margin: 0 auto;
    padding: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .md-button {
    margin: 20px 0 0 0;
    width: 100%;
    height: 50px;
    font-size: 16px;
  }

  .md-input {
    height: 40px;
  }

  .md-field:after {
    background-color: rgba(167, 167, 167, 0.42);
  }
</style>
