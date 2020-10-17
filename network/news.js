import request from "./request.js"

// 获取资讯列表数据
export function getNewsList() {
	return request({
		url: '/api/getnewslist'
	})
}
// 获取资讯详情
export function getNewsDetail(newid) {
	return request({
		url: '/api/getnew/' + newid
	})
}