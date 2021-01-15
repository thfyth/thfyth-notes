'use strict';
// const uniID = require('uni-id');
// exports.main = async (event, context) => {
// 	//event为客户端上传的参数
// 	const data = {
// 		username: 'admin123',
// 		password: 'thfyth123456',
// 		role: ["admin"],
// 	}
// 	const res = await uniID.register(data)

// 	console.log(res);
// 	//返回数据给客户端
// 	return res
// };
//引入Router
const {
    Router
} = require('uni-cloud-router')
//根据配置文件初始化router
const router = new Router(require('./config.js'))
exports.main = async (event, context) => {
	//由Rouer接管云函数
    return router.serve(event, context)
};
