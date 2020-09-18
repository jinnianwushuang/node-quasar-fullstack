/*
 * @Date           : 2020-09-12 23:23:34
 * @FilePath       : /node-quasar-fullstack/src/api/module/authors.js
 * @Description    :   作者资源 模块
 */



import axios from "src/api/axios_wapper.js"
let prefix= process.env.API_PREFIX


// 获取所有的 作者 
export const get_authors_findAll = (params,url="/api/authors/") => axios.get(url,{ params:{ ...params}})

// 创建 一个作者信息
export const  post_authors_create= (params,url="/api/authors/") => axios.post(url, {...params})
// 删除 所有作者信息
export const  delete_authors_all= (params,url="/api/authors/") => axios.delete(url, {...params})

// 通过性别 获取所有的  作者信息
export const get_authors_findAllBySex = (params,url="/api/authors/findAllBySex") => axios.get(url,{ params:{ ...params}})



// 通过id 获取单个 作者信息
export const get_authors_by_id = (params,url="/api/authors/") => axios.get(url+params.id, { params})

// 通过id 更新单个 作者信息
export const put_authors_by_id = (params,url="/api/authors/") => axios.put(url+params.id, { params})

// 通过id  删除单个 作者信息
export const delete_authors_by_id = (params,url="/api/authors/") => axios.delete(url+params.id, { params})