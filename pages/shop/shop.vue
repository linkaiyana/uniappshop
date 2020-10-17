<template>
	<view class="shop">
		<goods :goods="goods" />
	</view>
</template>

<script>
	import goods from "../../components/goods.vue"
	import {getGoods} from "../../network/home.js"
	export default {
		data() {
			return {
				goods: [],
				currentPage: 0
			}
		},
		components: {
			goods
		},
		methods: {
			// 获取商品数据
			getGoods(currentPage) {
				let index = ++currentPage;
				getGoods(index).then(res => {
					const data = res.data.message;
					this.goods.push(...data)
				})
				this.currentPage = index
			}
		},
		onLoad() {
			this.getGoods(this.currentPage)
		},
		// 监听下拉加载更多
		onReachBottom() {
			if(this.goods.length < this.currentPage * 10) return
			this.getGoods(this.currentPage)
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.goods = [];
			this.currentPage = 0
			this.getGoods(this.currentPage);
			uni.stopPullDownRefresh()
		}
	}
</script>

<style lang="scss" scoped>
	.shop {
		background-color: #eee;
		padding: 0 10rpx;
	}
</style>
