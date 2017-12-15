<template>
  <section id="admin">
  	<div id="left_nav">
      <mu-list-item title="数据模块" to="modules" >
        <mu-icon slot="left" value="widgets" />
      </mu-list-item>
    </div>
    <div class="main">
      <mu-breadcrumb id="crumb">
        <mu-breadcrumb-item :href="v.path ? v.path : '/'" v-for="v of routerlist">{{v.meta.title}}</mu-breadcrumb-item>
      </mu-breadcrumb>
      <router-view name="main"></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  computed: {
    routerlist: function () {
      return this.$route.matched
    }
  },
  watch: {
    routerlist: function (v) {
      console.log(v)
    }
  },
  created: function () {
    console.log(this.routerlist)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#admin {
  display: flex;
  height: 100%;
  justify-content: flex-start;

  #left_nav {
    flex-shrink: 0;
    background-color: #f4f4f4;
    width:200px;
  }

  .main {
    flex-shrink: 1;
    width: 100%;
  }
}

#crumb {
  margin: 20px;
}
</style>
