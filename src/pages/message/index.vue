<!--
 * @Date           : 2021-05-23 01:11:48
 * @FilePath       : /node-quasar-fullstack/src/pages/message/index.vue
 * @Description    : 
-->

<template>
    <div>
        <!-- 搜索条件区域 -->


       <div class="row q-gutter-x-md q-my-md justify-end" >
            <q-input outlined dense v-model="query_from.name" label="name" />
              <q-input outlined dense v-model="query_from.fat" label="fat" />

   <q-btn color="primary" class="q-px-md" dense  @click="handle_click_search" label="搜索" />
    <q-btn color="negative" class="q-px-md" dense  @click="handle_click_reset" label="重置" />
           </div> 
           <!-- 表格区域 -->
     
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="table_data"
      :columns="columns"
      row-key="name"
    />
  </div>
    </div>
</template>

<script>
import mock_data from "src/pages/message/mock/index.js"
import columns  from "src/pages/message/config/index.js"
import {api_message} from "src/api/index.js"
    export default {
        data() {
            return {
                columns,
                table_data:mock_data ,
                query_from:{
                    name:'',
                    fat:''
                },
                pagination:{
                    current_page:1,
                    page_size:20
                } 

            }
        },
        created () {
            ;
        },
        methods: {

            // 搜索按钮 
            handle_click_search(){

                this.init_table_data()


            },
            //重置搜索条件
            handle_click_reset(){
             this. query_from={
                    name:'',
                    fat:''
                },

                this.init_table_data()


            },
            //查询列表数据 
            init_table_data(){
                let params={
                   ...this. query_from,
                   tag:99,
                   page:this.pagination.current_page,
                   pageSize:this.pagination.page_size
                }
                console.log('api_message',api_message);
                    console.log('params-------发送',params);
                api_message.get_message_list_data(params).then(res=>{
                    console.log('res',res);
                    this.table_data= res.data
                })




            },


            
        },
    }
</script>

<style lang="scss" scoped>

</style>