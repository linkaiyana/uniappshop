const BASE_URL = 'http://localhost:8082'
export default function(options) {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中'
		})
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: resolve,
			fail: reject,
			complete() {
				uni.hideLoading()
			}
		})
	})
}