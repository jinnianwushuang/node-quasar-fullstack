/*
 * @Date           : 2020-09-12 23:23:34
 * @FilePath       : /node-quasar-fullstack/src/api/module/author.js
 * @Description    :   作者资源 模块
 */



import axios from "src/api/axios_wapper.js"
let prefix= process.env.API_PREFIX
 

// 获取所有的 作者 
export const get_author_findAll = (params,url="/api/author/") => axios.get(url,{ params:{ ...params}})

// 创建 一个作者信息
export const  post_author_create= (params,url="/api/author/") => axios.post(url, params)
// 删除 所有作者信息
export const  delete_author_all= (params,url="/api/author/") => axios.delete(url, {...params})

// 通过性别 获取所有的  作者信息
export const get_author_findAllBySex = (params,url="/api/author/findAllBySex") => axios.get(url,{ params:{ ...params}})

// 批量模拟数据  作者信息
export const get_author_fastMock = (params,url="/api/author/fastMock") => axios.get(url, { params})


// 通过id 获取单个 作者信息
export const get_author_by_id = (params,url="/api/author/") => axios.get(url+params.id, { params})

// 通过id 更新单个 作者信息
export const put_author_by_id = (params,url="/api/author/") => axios.put(url+params.id, params)

// 通过id  删除单个 作者信息
export const delete_author_by_id = (params,url="/api/author/") => axios.delete(url+params.id, { params})