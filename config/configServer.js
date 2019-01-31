//判断是否在微信内访问
var ua = window.navigator.userAgent.toLowerCase(); 
if (ua.match(/MicroMessenger/i) == 'micromessenger') { //微信内
	
} else { //非微信内
	  window.location.href = "http://www.baidu.com";
}

var serverPath = "http://www.wzkj.shop/";