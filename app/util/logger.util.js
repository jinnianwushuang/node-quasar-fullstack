/*
 * @Date           : 2020-09-26 00:15:52
 * @FilePath       : /node-quasar-fullstack/app/util/logger.util.js
 * @Description    :
 */

module.exports = {
  formart_request(req, prefix) {
    let str = `${prefix ||
      "查询参数------>>"} "--link-id:${req.headers['link-id']}"  --${new Date().getTime()}--  ${
      req.headers.host
    }  -  "${req.method}   ${req.baseUrl}"    '-->query: ${JSON.stringify(
      req.query
    )}'  '-->params:${JSON.stringify(req.params)}'  '-->body:${ JSON.stringify(req.body)}'`;

    return str;
  },
  //req.baseUrl  
//   formart_response(res, prefix) {
//     let str = `${prefix ||
//       "返回数据------>>"} "--link-id:${res.req.headers['link-id']}" --${new Date().getTime()}--  ${
//         res.req.headers.host
//     }  -  "${res.req.method}   ${res.req.baseUrl}"    '-->query: ${JSON.stringify(
//         res.req.query
//     )}'  '-->params:${JSON.stringify(res.req.params)}'  '-->body:${ JSON.stringify(res.req.body)}'`;

//     return str;
//   },

  formart_response(res,statusobj, prefix) {
    let str = `${prefix ||
      "返回数据------>>"} "--link-id:${res.req.headers['link-id']}"  --${new Date().getTime()}--  ${
        res.req.headers.host
    }  -  "${res.req.method}   ${res.req.baseUrl}"    '--status:${JSON.stringify(statusobj)}'`;

    return str;
  },

};
