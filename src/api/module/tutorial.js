/*
 * @Date           : 2020-09-12 23:23:34
 * @FilePath       : /node-quasar-fullstack/src/api/module/tutorial.js
 * @Description    :   教程资源 模块
 */



import axios from "src/api/axios_wapper.js"
let prefix= process.env.API_PREFIX


// 获取所有的 教程 
export const get_tutorial_findAll = (params,url="/api/tutorial/") => axios.get(url,{ params:{ ...params}})

// 创建 一个教程信息
export const  post_tutorial_create= (params,url="/api/tutorial/") => axios.post(url, {...params})
// 删除 所有教程信息
export const  delete_tutorial_all= (params,url="/api/tutorial/") => axios.delete(url, {...params})

// 获取所有的 已发布 教程 
export const get_tutorial_findAllPublished = (params,url="/api/tutorial/published") => axios.get(url,{ params:{ ...params}})

// 批量模拟数据  教程信息
export const get_tutorial_fastMock = (params,url="/api/tutorial/fastMock") => axios.get(url, { params})


// 通过id 获取单个 教程信息
export const get_tutorial_by_id = (params,url="/api/tutorial/") => axios.get(url+params.id, { params})

// 通过id 更新单个 教程信息
export const put_tutorial_by_id = (params,url="/api/tutorial/") => axios.put(url+params.id, params)

// 通过id  删除单个 教程信息
export const delete_tutorial_by_id = (params,url="/api/tutorial/") => axios.delete(url+params.id, { params})