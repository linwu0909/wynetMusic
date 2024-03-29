import {baseUrl} from './config.js';

export function topList() {
	const listIds = ['3', '0', '2', '1']
	return new Promise(function(resolve,reject) {
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data:  {},
			success: res => {
				let result = res.data.list;
				result.length = 4;
				for (let ii in listIds) {
					result[ii].listId = listIds[ii];
				}
				resolve(result)
			}
		})
	})
}

export function list(listId) {
	return uni.request({
		url: `${baseUrl}/top/list?idx=${listId}`,
		method: 'GET'
	})
}

export function songDetail(songId){
	return uni.request({
		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET'
	});
}

export function songSimi(songId){
	return uni.request({
		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET'
	});
}

export function songComment(songId){
	return uni.request({
		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET'
	});
}

export function songLyric(songId){
	return uni.request({
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET'
	});
}

export function songUrl(songId){
	return uni.request({
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET'
	});
}

export function searchHot(){
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET'
	});
}

export function searchWord(word){
	return uni.request({
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET'
	});
}

export function searchSuggest(word){
	return uni.request({
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	});
}