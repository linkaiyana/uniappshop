import request from "./request.js"

// 详情轮播图
export function getDetailSwiper(imgid) {
	return request({
		url: '/api/getthumimages/' + imgid
	})
}
// 详情数据
export function getDetailData(id) {
	return request({
		url: '/api/goods/getinfo/' + id
	})
}

// 详情介绍
export function getDetailDesc(id) {
	return request({
		url: '/api/goods/getdesc/' + id
	})
}