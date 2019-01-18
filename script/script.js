var getTimeDate = function () {
    var currentDate = new Date(),
        weddingDate = new Date("15 feb 2019 12:00:00"),
        totalDiff   = Math.floor((weddingDate - currentDate)/1000),
        days        = Math.floor(totalDiff/(86400))+"",
        hours       = Math.floor(totalDiff/(3600)%(24))+"",
        minutes     = Math.floor(totalDiff/(60)%(60))+"",
        seconds     = Math.floor(totalDiff%(60))+"",
        daysElm     = document.getElementById("counter-days"),
        hoursElm    = document.getElementById("counter-hours"),
        minutesElm  = document.getElementById("counter-minutes"),
        secondsElm  = document.getElementById("counter-seconds");
        
    days = days.length > 1 && days || "0"+days;
    hours = hours.length > 1 && hours || "0"+hours;
    minutes = minutes.length > 1 && minutes || "0"+minutes;
    seconds = seconds.length > 1 && seconds || "0"+seconds;
    
    if(daysElm.innerHTML !== days) {
        daysElm.innerHTML = days;
    }
    
    if(hoursElm.innerHTML !== hours) {
        hoursElm.innerHTML = hours; 
    }
    
    if(minutesElm.innerHTML !== minutes) {
        minutesElm.innerHTML = minutes; 
    }
    secondsElm.innerHTML = seconds;
        
};

getTimeDate();
setInterval(getTimeDate, 1000);



var initEvents = (function() {
	var menuElm = document.getElementById("burger-menu-btn"),
		menurap = document.getElementById("burger-menu-wrap");

	menuElm.addEventListener("click",function(e){
		if(menurap.className.indexOf("closed") === -1 ) {
			menurap.classList.add("closed");
			menurap.classList.remove("open");
		} else {
			menurap.classList.add("open");
			menurap.classList.remove("closed");
		}
		e.stopPropagation();
	});

	document.addEventListener("click",function(e){
		if(menurap.className.indexOf("closed") === -1 && menurap.className.indexOf("open") !== -1 ) {
			menurap.classList.add("closed");
			menurap.classList.remove("open");
		}
	});

})();


jQuery(document).ready(function ($) {

	var options = {
		$FillMode: 1,                                       //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
		$AutoPlay: 0,                                       //[Optional] Auto play or not, to enable slideshow, this option must be set to greater than 0. Default value is 0. 0: no auto play, 1: continuously, 2: stop at last slide, 4: stop on click, 8: stop on user navigation (by arrow/bullet/thumbnail/drag/arrow key navigation)
		$Idle: 4000,                                        //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
		$PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

		$ArrowKeyNavigation: 1,   			                //[Optional] Steps to go for each navigation request by pressing arrow key, default value is 1.
		$SlideEasing: $Jease$.$OutQuint,                    //[Optional] Specifies easing for right to left animation, default value is $Jease$.$OutQuad
		$SlideDuration: 2000,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
		$MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide, default value is 20
		//$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
		//$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
		$SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
		$UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
		$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
		$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)

		$BulletNavigatorOptions: {                          //[Optional] Options to specify and enable navigator or not
			$Class: $JssorBulletNavigator$,                 //[Required] Class to create navigator instance
			$ChanceToShow: 0,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
			$SpacingX: 8,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
			$Orientation: 1                                //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
		},

		$ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
			$Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
			$ChanceToShow: 2                                 //[Optional] Steps to go for each navigation request, default value is 1
		}
	};

	var jssor_slider1 = new $JssorSlider$("slider1_container", options);

	//responsive code begin
	//you can remove responsive code if you don't want the slider scales while window resizing
	function ScaleSlider() {
		var bodyWidth = document.body.clientWidth;
		if (bodyWidth)
			jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
		else
			window.setTimeout(ScaleSlider, 30);
	}
	ScaleSlider();

	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	//responsive code end

		$("[data-u='image']").each(function(i,elm){
			var imageSrc = elm.src,
				parentElm = $(elm).parent(),
				innerDiv = $("<div></div>");

			innerDiv.addClass("slider-blur-bg");
			innerDiv.css({"background-image": "url("+imageSrc+")"});
			parentElm.append(innerDiv);
		});
});
