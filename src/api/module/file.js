/*
 * @Date           : 2020-09-12 23:23:34
 * @FilePath       : /node-quasar-fullstack/src/api/module/file.js
 * @Description    :   教程资源 模块
 */



import axios from "src/api/axios_wapper.js"
let prefix= process.env.API_PREFIX


 

// 创建 一个教程信息
export const  post_file_uploadimg= (params,url="/api/file/uploadimg") => axios.post(url, {...params})
