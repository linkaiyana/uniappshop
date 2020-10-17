<template>
	<view>
		<!-- 轮播图 -->
		<my-swiper :banners="banners" />
		<!-- 导航数据 -->
		<home-data :dataList="dataList" />
		<!-- 商品数据 -->
		<view class="goods">
			<view class="title">推荐商品</view>
			<goods :goods="goods" />
		</view>
	</view>
</template>

<script>
	import {
		getBanner,
		getGoods
	} from "../../network/home.js";
	import mySwiper from "../../components/mySwiper.vue"
	import homeData from "./childCpns/homeData.vue"

	import goods from "../../components/goods.vue"
	export default {
		data() {
			return {
				banners: [],
				dataList: [
					{
						iconClass: 'iconfont icon-ziyuan',
						text: '黑马超市',
						path: '/pages/shop/shop'
					},{
						iconClass: 'iconfont icon-guanyuwomen',
						text: '联系我们',
						path: '/pages/contact/contact'
					},{
						iconClass: 'iconfont icon-tupian',
						text: '社区图片',
						path: '/pages/pics/pics'
					},{
						iconClass: 'iconfont icon-shipin',
						text: '学习视频',
						path: '/pages/video/video'
					},
				],
				goods: [],
				currentPage: 0
			};
		},
		methods: {
			// 获取轮播图数据
			getBanner() {
				getBanner().then(res => {
					this.banners = res.data.message;
				})
			},
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
		components: {
			mySwiper,
			homeData,
			goods
		},
		onLoad() {
			// 获取轮播图数据
			this.getBanner()
			// 获取商品第一页数据
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

<style lang="scss">
	.goods {
		background-color: #eee;
		padding: 10rpx;
		
		> .title {
			line-height: 100rpx;
			text-align: center;
			color: $main-color;
			letter-spacing: 25rpx;
			background-color: #fff;
		}
	}
</style>
