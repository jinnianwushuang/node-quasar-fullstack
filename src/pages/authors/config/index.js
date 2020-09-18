/*
 * @Date           : 2020-09-13 01:01:49
 * @FilePath       : /node-quasar-fullstack/src/pages/tutorials/config/index.js
 * @Description    : 
 */


export const  columns=[
    { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
    {
      name: 'title',
      required: true,
      label: '标题',
      align: 'left',
      field: row => row.title,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'description', align: 'center', label: '描述', field: 'description', sortable: true },
    { name: 'published', align: 'center', label: '是否发布', field: 'published',  format: val => `${val?'是':'否'   }`, sortable: true },
    { name: 'createdAt', align: 'center', label: '创建时间', field: 'createdAt', sortable: true },
    { name: 'updatedAt', align: 'center', label: '更新时间', field: 'updatedAt', sortable: true },

]