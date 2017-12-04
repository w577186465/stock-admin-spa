<template>
  <div id="app">
  	<el-menus/>
  	<router-view></router-view>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'layout',
  components: {
    'el-menus': Menu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created: function () {
    this.axios.get('http://localhost:8000/api/test')
    .then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
