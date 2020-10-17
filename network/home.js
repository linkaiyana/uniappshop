import request from "./request.js"

export function getBanner() {
	return request({
		url: '/api/getlunbo',
	})
}
	
export function getGoods(pageindex) {
	return request({
		url: '/api/getgoods',
		data: {
			pageindex
		}
	})
}

export function getCategory() {
	return request({
		url: '/api/getimgcategory'
	})
}

export function getCategoryImg(cateid) {
	return request({
		url: '/api/getimages/' + cateid
	})
}