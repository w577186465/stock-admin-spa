<template>
  <div>
    <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
    {{result}}
    </mu-popup>
    <div class="warp">
      <form v-on:submit.prevent="login">
        <mu-text-field label="用户名" v-model="form.email" labelFloat fullWidth/><br/>
        <mu-text-field label="密码" hintText="请输入密码" v-model="form.password" type="password" labelFloat fullWidth/><br/>
        <div class="line">
            <mu-switch label="长期登录" class="demo-switch" />
            <mu-flat-button label="找回密码" class="demo-flat-button" primary/>
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
      sending: false,
      result: ''
    }
  },
  methods: {
    login: function () {
      this.result = 'logining'
      this.topPopup = true
      axios.post('http://localhost:8000/oauth/token', {
        grant_type: 'password',
        client_secret: 'tWD3fypk6ZHn3i7lzn5SUc61LLkhgz7lLH6cHwmG',
        client_id: '2',
        username: this.form.email,
        password: this.form.password
      })
      .then(res => {
        this.result = 'success'
      })
      .catch(res => {
        this.result = 'error'
      })
    }
  }
}
</script>

<style lang="scss">
  .demo-popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
  }
  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
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
    width: 100%;
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
