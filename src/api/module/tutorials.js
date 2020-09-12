/*
 * @Date           : 2020-09-12 23:23:34
 * @FilePath       : /node-quasar-fullstack/src/api/module/tutorials.js
 * @Description    :   教程资源 模块
 */



import axios from "src/api/axios_wapper.js"
let prefix= process.env.API_PREFIX


// 获取所有的 教程 
export const get_tutorials_findAll = (params,url="/api/tutorials/") => axios.get(url,{ params:{ ...params}})

// 创建 一个教程信息
export const  post_tutorials_create= (params,url="/api/tutorials/") => axios.post(url, {...params})
// 删除 所有教程信息
export const  delete_tutorials_all= (params,url="/api/tutorials/") => axios.delete(url, {...params})

// 获取所有的 已发布 教程 
export const get_tutorials_findAllPublished = (params,url="/api/tutorials/published") => axios.get(url,{ params:{ ...params}})



// 通过id 获取单个 教程信息
export const get_tutorials_by_id = (params,url="/api/tutorials/") => axios.get(url+params.id, { params})

// 通过id 更新单个 教程信息
export const put_tutorials_by_id = (params,url="/api/tutorials/") => axios.put(url+params.id, { params})

// 通过id  删除单个 教程信息
export const delete_tutorials_by_id = (params,url="/api/tutorials/") => axios.delete(url+params.id, { params})