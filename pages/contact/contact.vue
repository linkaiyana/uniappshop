<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode="widthFix"></image>
		<view class="content" @click="call">
			联系电话：400-618-9090（点击拨打）
		</view><view class="content">
			校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 30.312212,
				longitude: 120.363172,
				markers: [{
                latitude: 30.312212,
                longitude: 120.363172,
								iconPath: "../../static/address.png",
								width: 30,
								height: 30
          }]
			}
		},
		methods: {
			call() {
				uni.makePhoneCall({
					phoneNumber: '400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss" scoped> 
	.contact {
		.img {
			width: 100%;
		}
		.content {
			padding: 0 20rpx;
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
