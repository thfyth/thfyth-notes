const { Service } = require('uni-cloud-router');
module.exports=class UserService extends Service{
	async addUser(){
		return {
			code: 10001,
			message: '该账号暂无权限登录'
		}
	}
}