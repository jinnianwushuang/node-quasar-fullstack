/*
 * @Date           : 2020-09-13 01:01:49
 * @FilePath       : /node-quasar-fullstack/src/pages/artical/config/index.js
 * @Description    :
 */

export const columns = [
  { name: "handle", align: "center", label: "操作", field: "" },
  { name: "id", align: "center", label: "ID", field: "id" },
  {
    name: "title",
    required: true,
    label: "长标题",
    align: "left",
    field: row => row.title,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: "title_short",
    align: "center",
    label: "短标题",
    field: "title_short"
  },

  { name: "show_date", align: "center", label: "显示日期", field: "show_date" },
  { name: "banner", align: "center", label: "主题图片", field: "banner" },
  { name: "content", align: "center", label: "内容", field: "content",classes:"text-ellipsis" },

  { name: "description", align: "center", label: "描述", field: "description" ,classes:"text-ellipsis"},

  { name: "createdAt", align: "center", label: "创建时间", field: "createdAt" },
  { name: "updatedAt", align: "center", label: "更新时间", field: "updatedAt" }
];
