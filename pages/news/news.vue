<template>
	<view class="news">
		<block v-for="item in newsList" :key="item.id">
			<view class="item" @click="itemClick(item.id)">
				<view class="img">
					<image :src="item.img_url" mode="widthFix"></image>
				</view>
				<view class="info">
					<view class="title">
						{{item.title}}
					</view>
					<view class="detail">
						<text>发表时间：{{item.add_time | formatDate}}</text>
						<text>浏览：{{item.click}}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import { getNewsList, getNewsDetail } from "../../network/news.js"
	export default {
		data() {
			return {
				newsList: []
			};
		},
		methods: {
			// 获取资讯列表
			getNewsList() {
				getNewsList().then(res => {
					this.newsList = res.data.message
				})
			},
			itemClick(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/newsdetail/newsdetail?id=' + id
				})
			}
		},
		onLoad() {
			// 获取资讯列表
			this.getNewsList();
		}
	}
</script>

<style lang="scss" scoped>
	.news {
		.item {
			display: flex;
			padding: 10rpx;
			padding-bottom: 0;
			border-bottom: 1px solid #eee;
			image {
				width: 250rpx;
				margin-right: 10rpx;
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title {
					font-size: 30rpx;
				}
				.detail {
					display: flex;
					justify-content: space-between;
					font-size: 25rpx;
				}
			}
		}
	}
</style>
