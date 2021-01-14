<!--
 * @Date           : 2020-09-13 00:45:57
 * @FilePath       : /node-quasar-fullstack/src/pages/artical/index.vue
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
          <q-td :props="props" class="bg-teal-4">
            <div class="q-gutter-x-md">
                <q-checkbox v-model="props.row.active" label="启用" true-value="1" false-value="0"         @input="handle_click_update_item(props.row,'active')" />
                <q-checkbox v-model="props.row.type_hot" label="单类曝光"  true-value="1" false-value="0"  @input="handle_click_update_item(props.row,'type_hot')"   />
                <q-checkbox v-model="props.row.type_top" label="单类置顶"  true-value="1" false-value="0"  @input="handle_click_update_item(props.row,'type_top')"   />
                <q-checkbox v-model="props.row.home_hot" label="首页曝光"  true-value="1" false-value="0"  @input="handle_click_update_item(props.row,'home_hot')"   />
                <q-checkbox v-model="props.row.home_top" label="首页曝光"  true-value="1" false-value="0"  @input="handle_click_update_item(props.row,'home_top')"   />
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
      style="width:1250px;max-width:1250px"
    >
      <q-card style="width:1250px;max-width:1250px" class="q-px-md">
        <q-card-section>
          <div class="text-h6">{{ edit_dialog_title }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none q-gutter-y-sm">
          <div class="row">
            <div class="form-label">长标题</div>
            <div class="col">
              <q-input outlined dense v-model="editing_obj.title"> </q-input>
            </div>
          </div>
          <div class="row">
            <div class="form-label">短标题</div>
            <div class="col">
              <q-input outlined dense v-model="editing_obj.title_short">
              </q-input>
            </div>
          </div>
          <div class="row">
            <div class="form-label">日期</div>
            <div class="col">
              <div class="q-gutter-md row items-start">
                <q-date
                  v-model="editing_obj.show_date"
                  mask="YYYY-MM-DD HH:mm"
                  color="purple"
                />
                <q-time
                  v-model="editing_obj.show_date"
                  mask="YYYY-MM-DD HH:mm"
                  color="purple"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-label">主题图片</div>
            <div class="col">       <q-file
        style="max-width: 300px"
        name="file"
        v-model="file"
        filled
        rounded
        label="选择图片"
        multiple
        accept=".jpg, image/*"
     
      /> 
      <q-btn color="primary" @click="handle_upload_image" label="确定上传"/>
      </div>
          </div>
          <div class="row">
            <div class="form-label">内容</div>
            <div class="col">
              <q-input
                outlined
                dense
                type="textarea"
                v-model="editing_obj.content"
              >
              </q-input>
            </div>
          </div>
          <div class="row">
            <div class="form-label">描述</div>
            <div class="col">
              <q-input
                outlined
                dense
                type="textarea"
                v-model="editing_obj.description"
              >
              </q-input>
            </div>
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
import { columns } from "src/pages/artical/config/index.js";
import { api_artical } from "src/api/index.js";
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
      edit_dialog_title: "新增数据",
      total: 0,
      table_style: {},
      pagination: {
        currentPage: 1,
        pageSize: 20,
        page: 1,
        rowsPerPage: 20
      },
      file:"", // 主题图片
      editing_obj_template: {
        title: "", // 长标题
        title_short: "", //短标题
        description: "", // 标题下的描述
        show_date: '', // 文章显示的 日期
        content: "", // 文章主要内容  ，富文本
        banner: "", //文章的大幅 主题图片
        
        type: "1", // 文章的主题类型
        active:'0', //是否启用
        type_hot: "0", // 文章是否是 其 同主题类型 相关的 文章  的 热门 文章   （单类轮播图）
        type_top: "0", // 文章是否是  其 同主题类型 相关的 文章  的 置顶 文章
        home_hot: "0", // 文章是否是  所有的主题类型 相关的 文章  的 热门 文章   （首页轮播图）
        home_top: "0" // 文章是否是  所有的主题类型 相关的 文章  的 置顶 文章
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
      console.log("api_artical", api_artical);
      api_artical.get_artical_findAll(params).then(res => {
        console.log("----调用接口返回数据");
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
      (this.edit_dialog_title = "新增数据"), this.init_editing_obj();
      this.show_edit_dialog = true;
    },
    // 编辑
    handle_click_edit(item) {
      console.log("编辑", item);
      (this.edit_dialog_title = "编辑数据"),
        (this.editing_obj = this.$lodash.cloneDeep(item));
      this.show_edit_dialog = true;
    },
    // 删除
    handle_click_delete(item) {
      console.log("删除单个", item);
      api_artical.delete_artical_by_id({ id: item.id }).then(res => {
        this.init_table_data();
      });
    },
    // 一键删除
    handle_click_delete_all() {
      console.log("删除所有");
      api_artical.delete_artical_all().then(res => {
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
      api_artical.get_artical_fastMock().then(() => {
        this.init_table_data();
      });
    },
    // 新增或者修改后提交服务器
    handle_click_submit() {
      console.log("新增或者修改后提交服务器");
      this.show_edit_dialog = false;
      if (this.editing_obj.id) {
        // 编辑
        this.handle_click_submit_edit();
      } else {
        //新增
        this.handle_click_submit_add();
      }
    },
    // 提交新增
    handle_click_submit_add(obj) {
      let params = obj || this.editing_obj;
      api_artical.post_artical_create(params).then(res => {
        if (!obj) {
          this.init_table_data();
        }
      });
    },
    //提交修改
    handle_click_submit_edit(obj) {
      let params = obj || this.editing_obj;
      api_artical.put_artical_by_id(params).then(res => {
        this.init_table_data();
      });
    },
    //提交修改 单个属性
    /**
     * item,表格那一列数据
     * obj 要更新的 键值对对象
     */
    handle_click_update_item(item, key) {
      let params = {
         [key]: item[key],
        id: item.id
      };
      api_artical.put_artical_by_id(params).then(res => {
        this.init_table_data();
      });
    },
    // 上传图片
    handle_upload_image(){
      

    }
  }
};
</script>
<style lang="scss" scoped></style>
