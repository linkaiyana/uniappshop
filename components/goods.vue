<template>
		<view class="goods-item">
			<view class="item" v-for="(item, index) in goods" :key="index" @click="itemClick(item.id)"> 
				<image class="img" :src="item.img_url" mode="widthFix"></image>
				<text class="nprice">￥{{item.sell_price}}</text>
				<text class="oprice">￥{{item.market_price}}</text>
				<view class="title">{{item.title}}</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: {
			goods: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			itemClick(id) {
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.item {
		box-sizing: border-box;
		padding: 20rpx 10rpx;
		width: 49%;
		background-color: #fff;
		margin-top: 10rpx;

		> .img {
			width: 80%;
			display: block;
			margin: auto;
			margin-bottom: 50rpx;
		}

		> .nprice {
			color: $main-color;
			margin-right: 10rpx;
		}

		> .oprice {
			font-size: 28rpx;
			text-decoration: line-through;
			color: #c6c6c6;
		}
		> .title {
			font-size: 30rpx;
		}

	}
</style>
