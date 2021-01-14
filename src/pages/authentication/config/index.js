/*
 * @Date           : 2020-09-13 01:01:49
 * @FilePath       : /node-quasar-fullstack/src/pages/authentication/config/index.js
 * @Description    : 
 */


export const  columns=[
 
  
    {
      name: 'name',
      required: true,
      label: '权限名称',
      align: 'left',
      field: row => row.title,
      format: val => `${val}`,
      sortable: true
    },
   
    { name: 'module', align: 'center', label: '模块', field: 'module' },
    { name: 'api_method', align: 'center', label: '方法', field: 'api_method' },
    { name: 'api_path', align: 'center', label: '路径', field: 'api_path' },
    { name: 'effective', align: 'center', label: '是否激活', field: 'effective',   },
    { name: 'description', align: 'center', label: '描述', field: 'description' },
    { name: 'createdAt', align: 'center', label: '创建时间', field: 'createdAt' },
    { name: 'updatedAt', align: 'center', label: '更新时间', field: 'updatedAt' },
    { name: 'handle', align: 'center', label: '操作', field: '' },


]