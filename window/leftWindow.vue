<template>
	<view class="main">
		<a-menu mode="inline" @click="selectMenu" :default-selected-keys="['2']" :default-open-keys="['1']" :style="{ height: '100%', borderRight: 0 }">
			<template v-for="item in meunList">
				<a-sub-menu :key="item.id">
					<span slot="title">
						<a-icon :type="item.icon" />
						{{item.name}}
					</span>
					<template v-if="item.children" v-for="items in item.children">
						<a-menu-item  :key="items.id">{{items.name}}</a-menu-item>
					</template>
					
				</a-sub-menu>
			</template>
		</a-menu>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				meunList:[
					{
						icon:'user',
						name:'用户管理',
						id:'user',
						children:[
							{
								name:'用户列表',
								id:'user/userlist',
							},{
								name:'达人列表',
								id:3,
							},
						]
					},{
						icon:'laptop',
						name:'文章管理',
						id:4,
						children:[
							{
								name:'文章列表',
								id:5,
							},{
								name:'回复列表',
								id:6,
							},{
								name:'分类列表',
								id:7,
							},{
								name:'关注列表',
								id:8,
							},{
								name:'标签管理',
								id:9,
							},
						]
					},{
						icon:'notification',
						name:'外链管理',
						id:10,
						children:[
							{
								name:'外链管理',
								id:11,
							}
						]
					}
				]
			}
		},
		methods:{
			selectMenu(e){
				console.log(e);
				const { key } = e;
				this.$router.push({
					path:`/${key}`
				})
			}
		}
	}
</script>

<style></style>
