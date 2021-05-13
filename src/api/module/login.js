/*
 * @Date           : 2021-05-13 23:29:59
 * @FilePath       : /node-quasar-fullstack/src/api/module/login.js
 * @Description    : 
 */

import axios from "src/api/axios_wapper.js"
let prefix= process.env.API_PREFIX


// 创建 一个教程信息
export const  post_login= (params,url="/api/login") => axios.post(url, {...params})