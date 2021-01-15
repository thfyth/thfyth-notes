const { Controller } = require('uni-cloud-router');

module.exports=class UserController extends Controller{
	async addUser(){
		return this.service.user.addUser();
	}
}