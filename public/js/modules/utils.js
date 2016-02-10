var utils = {};

utils.captureMouse = function (element) {
	var mouse = {x: 0, y: 0};

	element.addEventListener('mousemove', function (event) {
		var x, y;
		if (event.pageX || event.pageY){
			x = event.pageX;
			y = event.pageY;
		} else {
			x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= element.offsetLeft;
		y -= element.offsetTop;

		mouse.x = x;
		mouse.y = y;
	}, false);

	return mouse;
};

utils.captureTouch = function (element) {
	var touch = {x: null, y: null, ispressed: false};

	element.addEventListener('touchstart', function (event) {
		touch.ispressed = true;
	}, false);

	element.addEventListener('touchend', function (event) {
		var x, y,
			touch_event = event.touches[0];

		if(touch_event.pageX || touch_event.pageY) {
			x = touch_event.pageX;
			y = touch_event.pageY;
		} else {
			x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = touch_event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		x -= offsetLeft;
		y -= offsetTop;

		touch.x = x;
		touch.y = y;
	}, false);
	return touch;
};

utils.getAnimationFrame = function () {
	if(!window.requestAnimationFrame){
		window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) {
				return window.setTimeout(callback, 1000000)
			});
	}
};

utils.PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;
    return dpr / bsr;
})();


utils.createHiDPICanvas = function(canvas, w, h, ratio) {
    if (!ratio) { ratio = utils.PIXEL_RATIO; }
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas;
};

// var utils = require('./modules/utils');
// var ratio = utils.PIXEL_RATIO;

module.exports = utils;
