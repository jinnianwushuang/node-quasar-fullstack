/*
 * @Date           : 2020-09-13 01:01:49
 * @FilePath       : /node-quasar-fullstack/src/pages/tutorial/config/index.js
 * @Description    : 
 */


export const  columns=[
 
 
    {
      name: 'title',
      required: true,
      label: '标题',
      align: 'left',
      field: row => row.title,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'description', align: 'center', label: '描述', field: 'description' },
    { name: 'published', align: 'center', label: '是否发布', field: 'published',  format: val => `${val?'是':'否'   }` },
    { name: 'createdAt', align: 'center', label: '创建时间', field: 'createdAt' },
    { name: 'updatedAt', align: 'center', label: '更新时间', field: 'updatedAt' },
    { name: 'handle', align: 'center', label: '操作', field: '' },

]