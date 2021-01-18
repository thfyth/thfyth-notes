<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="less">
/*每个页面公共css */
.containter {
	 box-shadow: #ccc 1px 1px 5px;
	 width: 95%;
	 margin: 0 auto;
	 height: calc(100vh - 66px);
	.title-box {
		background: #fff;
		width: 100%;
		border-radius: 10px;
		padding: 10px 5px;
		margin-top: 2px;
		.title-list {
			width: 100%;
			display: flex;
			margin-bottom: 15px;
			box-shadow: #ccc 0px 0px 10px;
			border-radius: 10px;
			line-height: 72px;
			padding: 0 20px;
			.title-search {
				.title-name-input {
					width: 200px;
				}
			}
		}
		.titles-list {
			display: flex;
			align-items: center;
			.list-btn {
				padding-right: 15px;
				height: 100%;
				justify-items: center;
				cursor: pointer;
				color: #00395b;
			}
		}
	}
}
</style>
