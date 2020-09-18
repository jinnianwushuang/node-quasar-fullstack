<!--
 * @Date           : 2020-09-13 00:45:57
 * @FilePath       : /node-quasar-fullstack/src/pages/tutorials/index.vue
 * @Description    : 
-->
<template>
  <div>
    <div class="q-pa-md">
      <q-table title="Treats"
       :data="data" 
       :columns="columns"
        :pagination="initialPagination"
        row-key="name" />
    </div>
  </div>
</template>

<script>
import { columns } from "src/pages/tutorials/config/index.js";
import { api_tutorials } from "src/api/index.js";
export default {
  data() {
    return {
      columns,
      data: [],
            initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 0,
        rowsPerPage: 100
        // rowsNumber: xx if getting data from a server
      },
    };
  },
  created() {
    this.init_table_data();
  },
  methods: {
    init_table_data() {
      let params = {
        page: 0,
        size: 100
      };
      console.log("api_tutorials", api_tutorials);
      api_tutorials.get_tutorials_findAll(params).then(res => {
        console.log("----调用接口返回数据");
        console.log(res.data.tutorials);
        this.data = res.data.tutorials;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
