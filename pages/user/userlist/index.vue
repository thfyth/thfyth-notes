<template>
	<div class="containter">
		<div class="title-box">
			<div class="title-list">
				<div class="title-search">
					<a-input placeholder="请输入用户名或昵称" class="title-name-input" />
					<a-button type="primary" icon="search">查询</a-button>
				</div>
			</div>
			<div class="titles-list">
				<div class="list-btn">
					<a-button icon="user-add" type="primary" @click="openModel">新增用户</a-button>
				</div>
			</div>
		</div>
		<div class="table-view"><c-table :columns="columns"></c-table></div>
		<c-model :visible="visible" :formLable="formLabel" :form="form" @closeModel="closeModel"></c-model>
	</div>
</template>
<script>
import cTable from '@/components/cTable.vue';
import cModel from '@/components/cModel.vue';
import {request} from "@/utils/request.js"
const columns = [
	{
		title: '用户名',
		dataIndex: 'username',
		sorter: true,
		width: '20%',
		scopedSlots: { customRender: 'username' }
	},
	{
		title: '昵称',
		dataIndex: 'nickname',
		width: '20%'
	},
	{
		title: '性别',
		dataIndex: 'gender'
	},
	{
		title: '用户状态',
		dataIndex: 'status'
	},
	{
		title: '手机号码',
		dataIndex: 'mobile'
	},
	{
		title: '邮箱',
		dataIndex: 'email'
	}
];

let vm;
export default {
	data() {
		return {
			columns,
			visible:false,
			form:{},
			formLabel:[
				{
					label:'用户名：',
					name:'username',
					type:'put'
				},
				{
					label:'密码：',
					name:'password',
					type:'put'
				},
				{
					label:'昵称：',
					name:'nickname',
					type:'put'
				},
				{
					label:'手机：',
					name:'mobile',
					type:'put'
				},
			]
		};
	},
	created() {
		vm=this;
	},
	components: { cTable,cModel },
	methods:{
		openModel(){
			vm.visible=true
		},
		closeModel(e){
			vm.visible=e
		},
		saveEdit(){
			//点击保持
			request('user/register',vm.form)
				.then(res => {
					if(res.code === 0){
						uni.showToast({
							title:res.msg,
							icon:'success'
						})
					}else{
						uni.showToast({
							title:res.msg
						})
					}
				}).catch(err => {
					console.log(err);
				})
		}
	}
};
</script>
