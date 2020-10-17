<template>
	<view class="pics">
		<scroll-view class="nav" scroll-y>
			<block v-for="(item,index) in navList" :key="item.id">
				<view class="item" :class="{active : currentIndex == index}" @click="itemClick(index,item.id)">{{item.title}}</view>
			</block>
		</scroll-view>
		<scroll-view class="content" scroll-y>
			<block v-for="item in imgData" :key="item.id">
				<view class="item">
					<image class="img" :src="item.img_url" mode="widthFix" @click="imgClick(item.img_url)"></image>
					<view class="txt">
						{{item.zhaiyao}}
					</view>
				</view>
			</block>
			<view v-if="imgData.length == 0">
				暂无数据
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		getCategory,
		getCategoryImg
	} from "../../network/home.js"
	export default {
		data() {
			return {
				navList: [],
				currentIndex: 0,
				imgData: []
			}
		},
		methods: {
			// 获取分类列表
			getCategory() {
				getCategory().then(res => {
					this.navList = res.data.message;
					this.itemClick(0,this.navList[0].id)
				})
			},
			// 获取图片
			getCategoryImg(id) {
				getCategoryImg(id).then(res => {
					this.imgData = res.data.message;
				})
			},
			itemClick(index,id) {
				this.currentIndex = index;
				this.getCategoryImg(id)
			},
			imgClick(current) {
				const urls = this.imgData.map(item => {
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getCategory()
		}
	}
</script>

<style lang="scss" scoped>
	page {
		width: 100%;
		height: 100%;
	}
	.pics {
		height: 100%;
		display: flex;
	}
	.nav {
		min-width: 200rpx;
		max-width: 200rpx;
		height: 100%;
		box-sizing: border-box;
		border-right: 1px solid #eee;
		.item {
			height: 120rpx;
			line-height: 120rpx;
			text-align: center;
			border-bottom: 1px solid #eee;
		}
	}
	.active {
		background-color: $main-color;
		color: #fff;
	}
	.content {
		height: 100%;
		box-sizing: border-box;
		padding: 20rpx 10rpx;
		.item {
			margin-bottom: 20rpx;
			.img {
			width: 100%;
			border-radius: 10rpx;
			}
			.txt {
				font-size: 36rpx;
				line-height: 50rpx;
			}
		}
	}
</style>
