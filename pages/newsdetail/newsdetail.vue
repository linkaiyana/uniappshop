<template>
	<view class="detail">
		<view class="title">
			{{detail.title}}
		</view>
		<view class="info">
			<text>发表时间：{{detail.add_time | formatDate}}</text>
			<text>浏览：{{detail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import { getNewsDetail } from "../../network/news.js"
	export default {
		data() {
			return {
				detail: {}
			}
		},
		methods: {
			getNewsDetail(id) {
				getNewsDetail(id).then(res => {
					this.detail = res.data.message[0]
				})
			}
		},
		onLoad(options) {
			const id = options.id;
			// 获取资讯详情信息
			this.getNewsDetail(id)
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		padding: 20rpx 10rpx;
		.title {
			text-align: center;
			font-size: 32rpx;
			font-weight: 700;
		}
		.info {
			display: flex;
			justify-content: space-between;
			font-size: 26rpx;
			margin: 20rpx 0;
		}
		.content {
			font-size: 28rpx;
		}
	}

</style>
