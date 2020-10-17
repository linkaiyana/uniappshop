<template>
	<view class="data">
		<view class="item" v-for="item in dataList" @click="navTo(item.path)">
			<view :class="item.iconClass"></view>
			<text class="txt">{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList:{
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			navTo(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.data {
		display: flex;
		padding: 20rpx 10rpx;
		.item {
			text-align: center;
			font-size: 30rpx;
			flex: 1;
			.iconfont {
				width: 120rpx;
				height: 120rpx;
				line-height: 120rpx;
				color: #fff;
				margin: 0 auto;
				margin-bottom: 20rpx;
				border-radius: 50%;
				background-color: $main-color;
			}
		}
	}
</style>
