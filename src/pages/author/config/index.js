/*
 * @Date           : 2020-09-13 01:01:49
 * @FilePath       : /node-quasar-fullstack/src/pages/author/config/index.js
 * @Description    : 
 */


export const  columns=[
 
 
    { name: 'name', align: 'center', label: '姓名', field: 'name'},
    { name: 'age', align: 'center', label: '年龄', field: 'age'},
    { name: 'sex', align: 'center', label: '性别', field: 'sex',format:val=>val==1?'男':'女'},
    { name: 'married', align: 'center', label: '婚否', field: 'married',format:val=>val?'已婚':'未婚'},
    { name: 'nationality', align: 'center', label: '国籍', field: 'nationality'},
    { name: 'address', align: 'center', label: '地址', field: 'address'},
    { name: 'tel', align: 'center', label: '电话', field: 'tel'},
    { name: 'hobby', align: 'center', label: '爱好', field: 'hobby'},
    { name: 'remark', align: 'center', label: '标签', field: 'remark'},
    { name: 'description', align: 'center', label: '描述', field: 'description'},
  
    { name: 'createdAt', align: 'center', label: '创建时间', field: 'createdAt' },
    { name: 'updatedAt', align: 'center', label: '更新时间', field: 'updatedAt' },
    { name: 'handle', align: 'center', label: '操作', field: '' },

]