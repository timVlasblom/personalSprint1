/* global Slider */

'use strict';

(function(){
	var firstLoad = window.onload;
	window.onload = function(){
		if(firstLoad) firstLoad();
		Slider.init();
	};
})();
