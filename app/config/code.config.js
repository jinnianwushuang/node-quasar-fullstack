/*
 * @Date           : 2020-09-21 19:27:58
 * @FilePath       : /node-quasar-fullstack/app/config/code.config.js
 * @Description    : 状态code 码统一定义
 */
module.exports={
    SUCCESS:200,                    // 处理成功               MESSAGE_CODE.SUCCESS
    ERROR_NOT_FOUND:404,            // 结果找不到             MESSAGE_CODE.ERROR_NOT_FOUND
    ERROR_PARAMETER_WRONG:400,      // 参数错误               MESSAGE_CODE.ERROR_PARAMETER_WRONG
    ERROR_SERVER_WRONG:500,          //服务器处理失败         MESSAGE_CODE.ERROR_SERVER_WRONG
    ERROR_ALREADY_EXIST:20001,          //数据已存在         MESSAGE_CODE.ERROR_ALREADY_EXIST
}