/*
 * @Description: 
 * @Author: Y95201
 * @Date: 2023-02-13 12:41:44
 * @LastEditors: Y95201
 * @LastEditTime: 2023-02-13 15:20:24
 */

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.cmd == 'test') {
		var videos = document.getElementsByTagName('video');
		var myVideo;
		if (videos.length == 0) {
			var iframe = document.getElementsByTagName('iframe')[0];
			myVideo == iframe.contentWindow.document.getElementsByTagName('video')[0];
		} else {
			myVideo = videos[0];
		}
		sendResponse(myVideo.src.toString());
	}
});