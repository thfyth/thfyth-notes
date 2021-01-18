import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
	h5:{
	   vueRouterDev:true,  //完全使用vue-router开发 默认 false  
	 },
	platform: process.env.VUE_APP_PLATFORM,  
	// routes: [...ROUTES],
	routes:[
	    {
	        path:'/',
	        name:'user',
	        component:()=>import('@/pages/user/index.vue'),
	        children:[
	            {
	                path:'user/userList',
	                name:'userlist',
	                component:()=>import('@/pages/user/userlist/index.vue'),
	            },{
	                path:'user/talentlist',
	                name:'talentlist',
	                component:()=>import('@/pages/user/talentlist/index.vue'),
	            },
	        ]
	    }]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
	router,
	RouterMount
}