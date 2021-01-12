/*
 * @Date           : 2020-09-12 23:23:34
 * @FilePath       : /node-quasar-fullstack/src/api/module/authentication.js
 * @Description    :   教程资源 模块
 */



import axios from "src/api/axios_wapper.js"
let prefix= process.env.API_PREFIX


// 获取所有的 教程 
export const get_authentication_findAll = (params,url="/api/authentication/") => axios.get(url,{ params:{ ...params}})

// 创建 一个教程信息
export const  post_authentication_create= (params,url="/api/authentication/") => axios.post(url, {...params})
// 删除 所有教程信息
export const  delete_authentication_all= (params,url="/api/authentication/") => axios.delete(url, {...params})

// 获取所有的 已发布 教程 
export const get_authentication_findAllPublished = (params,url="/api/authentication/published") => axios.get(url,{ params:{ ...params}})



// 通过id 获取单个 教程信息
export const get_authentication_by_id = (params,url="/api/authentication/") => axios.get(url+params.id, { params})

// 通过id 更新单个 教程信息
export const put_authentication_by_id = (params,url="/api/authentication/") => axios.put(url+params.id, params)

// 通过id  删除单个 教程信息
export const delete_authentication_by_id = (params,url="/api/authentication/") => axios.delete(url+params.id, { params})