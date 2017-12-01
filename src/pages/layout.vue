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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
