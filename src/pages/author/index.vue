<!--
 * @Date           : 2020-09-13 00:45:57
 * @FilePath       : /node-quasar-fullstack/src/pages/author/index.vue
 * @Description    : 
-->
<template>
  <div class="q-px-md">
    <!-- 头部功能栏 -->
    <div class="q-gutter-x-md q-mt-md">
      <q-btn color="primary" label="新增数据" @click="handle_click_add" />
      <q-btn color="primary" label="刷新数据" @click="handle_click_refresh" />
      <q-btn color="primary" label="模拟数据" @click="handle_click_mock_data" />
      <q-btn color="red" label="一键删除" @click="handle_click_delete_all" />
    </div>
    <!-- 表格区域 -->
    <div class="q-py-md">
      <q-table
        class="my-sticky-header-table"
        :data="data"
        :columns="columns"
        hide-pagination
        :pagination.sync="pagination"
        hide-bottom
        row-key="name"
        :style="table_style"
      >
        <template v-slot:body-cell-handle="props">
          <q-td :props="props">
            <div class="q-gutter-x-md">
              <q-btn
                color="primary"
                label="编辑"
                @click="handle_click_edit(props.row)"
              />
              <q-btn
                color="red"
                label="删除"
                @click="handle_click_delete(props.row)"
              />
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
    <!-- 翻页器 -->
    <my-pagination
      :total="total"
      @pagination_change="handle_pagination_change"
    ></my-pagination>
    <!-- 弹出窗口 -->
    <q-dialog
      v-model="show_edit_dialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card style="width:360px" class="q-px-md">
        <q-card-section>
          <div class="text-h6">{{edit_dialog_title}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-sm">
          <div class="row">
            <div class="form-label">姓名</div>
            <q-input outlined dense v-model="editing_obj.name"> </q-input>
          </div>
                    <div class="row">
            <div class="form-label">年龄</div>
            <q-input outlined dense v-model="editing_obj.age"> </q-input>
          </div>
                    <div class="row">
            <div class="form-label">性别</div>
            <q-radio v-model="editing_obj.sex" val=1 label="男" />
            <q-radio v-model="editing_obj.sex" val=2 label="女" />
          
          </div>
                    <div class="row">
            <div class="form-label">婚否</div>
            <q-checkbox v-model="editing_obj.married" />
          
          </div>
                    <div class="row">
            <div class="form-label">国籍</div>
            <q-input outlined dense v-model="editing_obj.nationality"> </q-input>
          </div>
                    <div class="row">
            <div class="form-label">地址</div>
            <q-input outlined dense v-model="editing_obj.address"> </q-input>
          </div>
                    <div class="row">
            <div class="form-label">电话</div>
            <q-input outlined dense v-model="editing_obj.tel"> </q-input>
          </div>
                    <div class="row">
            <div class="form-label">爱好</div>
            <q-input outlined dense v-model="editing_obj.hobby"> </q-input>
          </div>
                              <div class="row">
            <div class="form-label">描述</div>
            <q-input outlined dense v-model="editing_obj.description"> </q-input>
          </div>

                    <div class="row">
            <div class="form-label">标签</div>
            <q-input outlined dense v-model="editing_obj.remark"> </q-input>
          </div>









        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            class="q-mx-md"
            label="确认"
            color="primary"
            @click="handle_click_submit"
          />
          <q-btn label="取消" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { columns } from "src/pages/author/config/index.js";
import { api_author } from "src/api/index.js";
import myPagination from "src/components/pagination/pagination1.vue";
export default {
  components: {
    myPagination
  },
  data() {
    return {
      columns,
      data: [],
      show_edit_dialog: false,
      edit_dialog_title:'新增作者',
      total: 0,
      table_style: {},
      pagination: {
        currentPage: 1,
        pageSize: 20,
        page: 1,
        rowsPerPage: 20
      },
      editing_obj_template: {
        name: "",
        age: "",
        sex: '1',
        married: false,
        nationality: "",
        address: "",
        tel: "",
        hobby: "",
        description: "",
        remark: ""
      },
      editing_obj: {}
    };
  },
  computed: {
    ...mapGetters({
      window_size: "get_window_size"
    })
  },
  created() {
    this.table_style = {
      height: window.innerHeight - 210 + "px"
    };

    this.init_table_data();
    this.init_editing_obj();
  },
  watch: {
    window_size(newValue, oldValue) {
      console.log("window_size", this.window_size);
      // this.table_style={
      // height:this.window_size.height-150   +"px",
      // maxHeight:this.window_size.height-150   +"px",
      // }
    }
  },
  methods: {
    init_table_data() {
      let params = {
        page: this.pagination.currentPage,
        size: this.pagination.pageSize
      };
      console.log("api_author", api_author);
      api_author.get_author_findAll(params).then(res => {
        console.log("-1111111111111111111---调用接口返回数据");
        console.log(res.data.data);
        let data = this.$lodash.get(res, "data.data");
        this.data = data.data;
        this.total = data.total;
        this.$forceUpdate();

        this.pagination = {
          currentPage: data.currentPage,
          pageSize: data.pageSize,
          rowsPerPage: data.pageSize
        };
      });
    },
    //翻页器数据改变
    handle_pagination_change(obj) {
      console.log("1");
      console.log("obj", obj);
      this.pagination = {
        currentPage: obj.currentPage,
        pageSize: obj.pageSize,
        page: obj.currentPage,
        rowsPerPage: obj.pageSize
      };
      this.init_table_data();
    },
    //初始化 editing_obj
    init_editing_obj() {
      console.log("初始化 editing_obj");
      this.editing_obj = this.$lodash.cloneDeep(this.editing_obj_template);
    },
    // 新增
    handle_click_add() {
      console.log("新增");
      this.init_editing_obj();
      this.edit_dialog_title='新增作者'
      this.show_edit_dialog = true;
    },
    // 编辑
    handle_click_edit(item) {
      console.log("编辑", item);
this.edit_dialog_title='编辑作者'
      this.editing_obj = this.$lodash.cloneDeep(item);
      this.editing_obj.sex =''+this.editing_obj.sex
      this.show_edit_dialog = true;
    },
    // 删除
    handle_click_delete(item) {
      console.log("删除单个", item);
      api_author.delete_author_by_id({ id: item.id }).then(res => {
        this.init_table_data();
      });
    },
    // 一键删除
    handle_click_delete_all() {
      console.log("删除所有");
      api_author.delete_author_all().then(res => {
        this.init_table_data();
      });
    },
    // 刷新
    handle_click_refresh() {
      console.log("刷新数据");
      this.init_table_data();
    },
    // 批量新增模拟数据
    handle_click_mock_data() {
      console.log("批量新增模拟数据");
   api_author.get_author_fastMock().then(()=>{
     this.init_table_data()
   })

    },
    // 新增或者修改后提交服务器
    handle_click_submit() {
      console.log("新增或者修改后提交服务器");
      this.show_edit_dialog = false;
      if (this.editing_obj.id) {
        // 编辑
        this.handle_click_submit_edit(this.editing_obj);
      } else {
        //新增
        this.handle_click_submit_add();
      }
    },
    // 提交新增
    handle_click_submit_add(obj) {
      let params = obj || this.editing_obj;
      api_author.post_author_create(params).then(res => {
        if (!obj) {
          this.init_table_data();
        }
      });
    },
    //提交修改
    handle_click_submit_edit(obj ) {
      let params = obj || this.editing_obj;
      api_author.put_author_by_id(params).then(res => {
        this.init_table_data();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
