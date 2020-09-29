/*
 * @Date           : 2020-09-26 00:15:52
 * @FilePath       : /node-quasar-fullstack/app/util/logger.util.js
 * @Description    :
 */

module.exports = (logEvent,config)=>{
  console.log('logEvent.data ');
  console.log(logEvent.data);
  let { req,res,code,message,prefix}=logEvent.data[0]
  let log_data_obj={}
  if(req){
    log_data_obj= formart.formart_request(req,code,message,prefix)
  }
  if(res){
    log_data_obj=formart.formart_response(res,code,message,prefix)
  }


  let obj={
    startTime: formart.formart_data(logEvent.startTime)  ,
    // categoryName:logEvent.categoryName,
    log_level:logEvent.level.levelStr,
    data:log_data_obj,
  }
  return JSON.stringify( obj) + config.separator; 
}

let formart= {

  formart_request(req,prefix) {


    let obj={
      type: prefix||"请求参数------>>",
      link_id:req.headers['link-id'],

      timestamp:new Date().getTime(),
      // host:req.headers.host,
      method:req.method,
      url:req.url,
      query:req.query,
      params:req.params,
      body:req.body,
   

    }
    return obj;


  },


  formart_response(res,code,message,prefix) {

// console.log('res');
// console.log(res);
// console.log( Object.keys(res));
    let obj={
      type: prefix||"返回数据------>>",
      link_id:res.req.headers['link-id'],
      timestamp:new Date().getTime(),
      code:code,
      message:message

    }
    return obj;
  },
  formart_date_base(value){
    let time=new Date(Date.parse(value))
    let y=time.getFullYear()
    let m=(time.getMonth()+1+'').padStart(2,0)
    let d=(time.getDate()+'').padStart(2,0)
    let h= (time.getHours()+'').padStart(2,0)
    let mm=(time.getMinutes()+'').padStart(2,0)
    let s=(time.getSeconds()+'').padStart(2,0)
    let ms=(time.getMilliseconds()+'').padStart(3,0)

    return [y,m,d,h,mm,s,ms]
  }, 
  timezone: new Date().getTimezoneOffset()/60,
  formart_data(value){
    let [y,m,d,h,mm,s,ms] =this.formart_date_base(value)

    return `${y}-${m}-${d} ${h}:${mm}:${s}.${ms}.T${this.timezone}`
  }


};
