<template>
  <section>
    <mu-table multiSelectable enableSelectAll ref="table">
      <mu-thead>
        <mu-tr>
          <mu-th>ID</mu-th>
          <mu-th>标题</mu-th>
          <mu-th>股票名称</mu-th>
          <mu-th>操作</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr>
          <mu-td>4</mu-td>
          <mu-td>Steve Brown</mu-td>
          <mu-td>Employed</mu-td>
          <mu-td class="handle">
            <mu-icon-button icon="border_color" @click="edit($event, 1)"/>
            <mu-icon-button icon="delete"/>
          </mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>
  </section>
</template>

<script>
export default {
  name: 'industrys',
  data () {
    return {
      industrys_total: 100,
      pageSizeOption: [10, 20, 30, 40]
    }
  },
  created: function () {
  },
  methods: {
    edit: function (event, id) {
      event.stopPropagation()
    }
  }
}
</script>

<style lang="scss">
.handle {
  .mu-icon-button {
    padding: 0;
    width: 30px;
    height: 30px;

    i {
      color: #6d6d6d;
      font-size: 18px;
    }
  }
}
</style>