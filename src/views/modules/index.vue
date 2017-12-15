<template>
  <section id="modules">
    <router-link to="reports" class="item">
      <mu-icon value="dvr" :size="80"/>
      <p>研报</p>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'modules',
  data () {
    return {
    }
  },
  created: function () {
  }
}
</script>

<style lang="scss">
  #modules {
    display: flex;

    .item {
      padding: 20px;
      background-color: #f0f0f0;
      margin: 10px;
      border-radius: 10px;
    }

    p {
      text-align: center;
    }
  }
</style>