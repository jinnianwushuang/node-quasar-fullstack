/*
 * @Date           : 2021-05-23 02:31:24
 * @FilePath       : /node-quasar-fullstack/src/api/module/message.js
 * @Description    : 
 */

import mock_data from "src/pages/message/mock/index.js"
import  axios from "src/api/axios_wapper.js"

export const  get_message_list_data =(params,url)=>{
    // return axios.get(url,{params})
    console.log('params-------收到的',params);
    let data=[]

      let arr1= mock_data.filter(x=>x.name.includes(params.name)&&(''+x.fat).includes(params.fat))

      let start_index=(params.page-1)*(params.pageSize)
      let end_index = params.page*params.pageSize-1
      let arr2= arr1.slice(start_index,end_index)
      
      


    return Promise.resolve({
        code:200,
        data:arr2,
        msg:'成功'
     })
}
