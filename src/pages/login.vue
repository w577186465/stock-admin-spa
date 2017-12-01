<template>
  <div>
    <div class="warp">
      <form v-on:submit.prevent="login">
        <md-field>
          <label for="first-name">邮箱</label>
          <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.email" :disabled="sending" />
          <!-- <span class="md-error" v-if="!form.username.required">The first name is required</span> -->
          <!-- <span class="md-error" v-else-if="!form.username.minlength">Invalid first name</span> -->
        </md-field>

        <md-field>
          <label for="first-name">密码</label>
          <md-input type="password" name="first-name" id="first-name" autocomplete="given-name" v-model="form.password" :disabled="sending" />
          <!-- <span class="md-error" v-if="!form.username.required">The first name is required</span> -->
          <!-- <span class="md-error" v-else-if="!form.username.minlength">Invalid first name</span> -->
        </md-field>
        <md-button @click="login" class="md-raised md-primary">登录后台</md-button>
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

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .warp {
    width: 400px;
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
