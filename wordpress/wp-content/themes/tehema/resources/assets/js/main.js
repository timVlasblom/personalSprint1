'use strict';

var Slider = (function() {
	var slideIndex = 1;
	var mouseOver = false;
	var active = false;

	var init = function() {
		window.setInterval(function() {
			showSlides();
		}, 8000);
		showSlides();
		var slideshow = document.getElementsByClassName('slideshow')[0];
		slideshow.onmouseover = function() {
			mouseOver = true;
		};
		slideshow.onmouseout = function() {
			mouseOver = false;
		};
		slideshow.onclick = function() {
			mouseOver = false;
			showSlides();
			mouseOver = true;
		};
	};

	var showSlides = function() {
		console.log(active);
		var slides = document.getElementsByClassName('banner-slides');
		if (mouseOver === false && active === false) {
			active = true;
			if (slideIndex > slides.length) {
				slideIndex = 1;
			}
			for (var i = 0; i < slides.length; i++) {
				slides[i].className = 'banner-slides fade';
			}
			slides[slideIndex -1].className = 'banner-slides fade show';
			if (slideIndex === slides.length) {
				slides[0].className = 'banner-slides fade showbefore';
			} else {
				slides[slideIndex].className = 'banner-slides fade showbefore';
			}
			window.setTimeout(function() {
				active = false;
			}, 1000);
			slideIndex++;
		}
	};
	return {
		showSlides: showSlides,
		init: init
	};
})();

/* global Slider */

'use strict';

(function(){
	var firstLoad = window.onload;
	window.onload = function(){
		if(firstLoad) firstLoad();
		Slider.init();
	};
})();

//# sourceMappingURL=main.js.map
