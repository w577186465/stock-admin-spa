<template>
  <section class="reports">
    <mu-text-field hintText="文章标题" icon="search" to="search" />
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="行业研报" to="industrys"/>
      <mu-tab value="tab2" title="个股研报" to="stock"/>
    </mu-tabs>

    <router-view name="list"></router-view>
  </section>
</template>

<script>
export default {
  name: 'reports',
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  created: function () {
  },
  methods: {
    handleTabChange: function (val) {
      this.activeTab = val
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>