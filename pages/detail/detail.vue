<template>
	<view>
		<my-swiper :banners="banners" height="752rpx" />
		<view class="infos">
			<view class="price-info">
				<text class="n-price">￥{{dataList.sell_price}}</text>
				<text class="o-price">￥{{dataList.market_price}}</text>
				<view class="title">
					{{dataList.title}}
				</view>
			</view>
			<view class="e-info">
				<view>
					货号：{{dataList.goods_no}}
				</view>
				<view>
					库存：{{dataList.stock_quantity}}
				</view>
			</view>
			<view class="desc">
				<view>详细介绍</view>
				<view class="title">{{desc.title}}</view>
				<rich-text class="content" :nodes="desc.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import { getDetailSwiper, getDetailData, getDetailDesc } from "../../network/detail.js"
	import mySwiper from "../../components/mySwiper.vue"
	export default {
		data() {
			return {
				banners: [],
				dataList: {},
				desc: {}
			}
		},
		components: {
			mySwiper
		},
		methods: {
			// 获取轮播图数据
			getDetailSwiper(id) {
				getDetailSwiper(id).then(res => {
					this.banners = res.data.message;
				})
			},
			// 获取详情信息
			getDetailData(id) {
				getDetailData(id).then(res => {
					this.dataList = res.data.message[0];
				})
			},
			// 获取商品介绍
			getDetailDesc(id) {
				getDetailDesc(id).then(res => {
					this.desc = res.data.message[0];
				})
			},
		},
		onLoad(options) {
			const id = options.id;
			// 获取轮播图数据
			this.getDetailSwiper(id)
			// 获取详情数据
			this.getDetailData(id);
			// 获取商品介绍
			this.getDetailDesc(id);
		}
	}
</script>

<style lang="scss" scoped>
	.infos {
		padding: 20rpx 10rpx;
		.price-info {
			border-bottom: 15rpx solid #eee;
			.n-price {
				color: red;
				font-size: 42rpx;
			}
			.o-price {
				color: gray;
				font-size: 30rpx;
				text-decoration: line-through;
				margin-left: 10rpx;
			}
			.title {
				font-size: 35rpx;
				margin: 20rpx 0;
			}
		}
		.e-info {
			line-height: 70rpx;
			font-size: 30rpx;
			border-bottom: 15rpx solid #eee;
		}
		.desc {
			width: 100%;
			.title {
				font-size: 35rpx;
				line-height: 50rpx;
				margin: 20rpx 0;
			}
			.content {
				font-size: 30rpx;
			}
		}
	}
</style>
