<template>
	<div class="content">
		<img src="/static/logo.png" alt="">
		<div class="text-area">
			<span class="title">{{title}}</span>
		</div>
		<router-view>123</router-view>
	</div>
</template>

<script>
	import {request} from "@/utils/request.js"
	export default {
		data() {
			return {
				title: 'Hello',
				value:null
			}
		},
		onLoad() {
			console.log(123);
			// this.request('addUser/addUser', {}).then(res => {
			//     console.log(res);
			//   })
			
			
			request('user/addUser',{})
				.then(res => {
					console.log(res);
				}).catch(err => {
					console.log(err);
				}).finally(err => {
					console.log(err);
				})
			
			
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
