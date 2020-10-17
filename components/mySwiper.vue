<template>
	<view class="swiper">
		<swiper :indicator-dots="true"
						:autoplay="true"
						:interval="3000"
						:duration="1000" 
						circular
						indicator-active-color="#fff"
						:style="{'height': height}">
			<swiper-item v-for="item in banners" :key="item.id">
				<image :src="item.img || item.src" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			banners: {
				type: Array,
				default() {
					return []
				}
			},
			height: {
				type: String,
				default: '410rpx'
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		// swiper {
		// 	height: 410rpx;
		// }
		image {
			width: 100%;
		}
	}
</style>
