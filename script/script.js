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
