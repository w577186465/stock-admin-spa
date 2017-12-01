<template>
  <div class="menu">
      <ul class="menuroot">
        <li :class="{'active': v.active}" v-for="v of data">
          <a href="#">
            <svg class="icon" aria-hidden="true" v-on:click="setfold()">
                <use :xlink:href="v.icon"></use>
            </svg>
            {{v.name}}
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      data: [
        {
          name: '抓取模块',
          icon: '#icon-manage_fill',
          active: true
        },
        {
          name: '任务管理',
          icon: '#icon-task'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .menu {
    background-color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

    .menuroot {
      li {
        a {
          display: block;
          width: 200px;
          line-height: 28px;
          padding: 10px 15px;
          font-size: 14px;
        }

        .icon {
          font-size: 28px;
          float: left;
          margin-right: 10px;
        }
      }
    }
  }
</style>
