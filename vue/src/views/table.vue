<template>
  <div>
    <section class="search">
      <el-input v-model="query" placeholder="输入进行搜索" clearable></el-input>
    </section>
    <section class="search">
      <el-button @click="search">搜索</el-button>
    </section>
    <el-table v-loading="table.loading" :data="table.list" style="width: 100%">
      <el-table-column prop="date" label="日期" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="address" label="adress" />
    </el-table>
  </div>
</template>

<script>
  import { ref } from '@vue/composition-api'
  import { useGetTableData } from './utils'
  export default {
    setup() {
      let query = ref('')
      const table = useGetTableData(query)
      const search = () => {
        table.getData.value(query.value)
      }
      return {
        table,
        query,
        search
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    margin-bottom: 30px;
    .el-input {
      width: 300px;
    }
  }
</style>