


// Flag begins here

	// Loads the flag into RAM.
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
		// Loads startup value into RAM.
	function getStartValByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	var paRameter = getParameterByName('flag');
		var startup = getStartValByName('startup');
			var ecglive = getStartValByName('ecglive');
 
 // Enables flag when page loads
	 $(document).ready(function() {


		// Copyright Mop: Shows a hidden theme
		if (paRameter == 'copyrightmop') {
			$('#lmc').show();
			$('#lmc').css('display','block');
		} 
		

		// No Disk: Stops Rimet from booting and spits a 'No boot disk' error.
		if (paRameter == 'nodisk') {
	   $('audio')[0].pause();
		  $("<style type='text/css'> body { display: none !important; } html { background: #000 !important; } html::after { content: 'ERROR: No boot disk has been detected or the disk has failed.'; color: #FFF !important; position: absolute; top: 20px; left: 30px; font-family: MSDOS, Tahoma; font-size: 18px !important; }</style>").appendTo("head");
		} 
		
		// Force Copyright Mop: Forces hidden theme, This will look broken on everything other than Default.
		if (paRameter == 'forcecopyrightmop') {
		  $("<style type='text/css'> @import url(lmc.css); </style>").appendTo("head");
		}
		
		// Rimet 2: Unlocks "Rimet 2"
		if (paRameter == 'rimet2') {
		  		   $("<style type='text/css'> #skip { display: none !important; } </style>").appendTo("head");
		   $("<style type='text/css'> #RimetOverlay { background-image: url('rimet2-startup.png') !important; } </style>").appendTo("head");
		   // storing url and time
            let delay = 5000;
            let url = "https://www.youtube.com/embed/iik25wqIuFo?autoplay=1&controls=0";
            setTimeout(function(){
                location = url;
            },5000)
		} 
		
			// Enable Rimet HTML: Self explanatory. Add ?flag=enableRimetHTML to Rimet.html to enable it.
		if (paRameter == 'enableRimetHTML') {
		  $("<style type='text/css'> @import url(hidden.css); </style>").appendTo("head");
		} 
		
			// Top Bar: Puts the taskbar on the top instead of the bottom. Experimental.
		if (paRameter == 'topbar') {
		   $("<style type='text/css'> #taskbar { bottom: unset !important; top: 0px !important; } .dropup-content { position: fixed !important; bottom: -30px !important; } .rBasedOn { top: unset !important; bottom: 5px !important; } #icons { top: 50px !important; } </style>").appendTo("body");
		} 
		
		// Clicksplosion: Adds a cool little effect when you click on the mouse.
		if (paRameter == 'clicksplosion') {
		   var script = document.createElement('script');  
        script.src = "clicksplosion.js";
        document.head.appendChild(script)
		} 
		
		
		// No Start: Disables startup screen for Rimet
		if (startup == 'no') {
			$('#RimetOverlay').hide();
			$('#RimetOverlay').css('display','none !important');
		} 
		
		// No Start (Flag Edition): Disables startup screen for Rimet
		if (paRameter == 'nostart') {
		  $('#RimetOverlay').hide();
			$('#RimetOverlay').css('display','none !important');
		} 
		
		// No Theme: Disables themes for Rimet, Forces Rimet Default
		if (paRameter == 'notheme') {
		$(".themesheet").load(function() {
    $(this).parent().remove();
    $('<center><p style="position: absolute !important; top: 50px; font-size: 11px; text-align: center; transform: translate(-50%, -50%); left: 50%;">Themes have been disabled by your administrator.</p></center>').appendTo('.themedesc');});
    $('#themeButton').hide();
		$('#themeButton').css('display','none !important');
		} 
		
		// Rimet XP: Disables all other themes and only allows XP.
		if (paRameter == 'rimetxp') {
		  $('audio')[0].pause();
		$(".themesheet").load(function() {
    $(this).parent().remove();
    $('<center><audio autoplay><source src="http://www.geocities.ws/ethanf44/files/Audio/Windows%20XP%20Startup.wav" type="audio/wav"></audio><p style="position: absolute !important; top: 50px; font-size: 11px; text-align: center; transform: translate(-50%, -50%); left: 50%;">Remove Rimet XP flag to enable themes.</p></center>').appendTo('.themedesc');});
     $("<style type='text/css'> @import url(lunablue.css); desktop, #themePreview { background-image: url('backgrounds/Bliss.jpg'); } #random { display: none !important; } '); </style>").appendTo("head");
    $('#themeButton').hide();
		$('#themeButton').css('display','none !important');
		$("#rimetBanner").attr("src", "xpbanner.png");
		} 
		
		// No About: Disables About Rimet, Adds information text to bottom of screen.
		if (paRameter == 'noabout') {
    $('<div class="rBasedOn" style="font-size: 10px; position: absolute; top: 5px; right: 8px;"><p>Rimet is based off of the <a href="https://html5-templates.com/preview/windows.html">Windows template</a> from <a href="https://html5-templates.com/">HTML5 Templates.</p></a></div> <style> #window0, #minimPanel0 { display: none !important; } #openAbout { color: grey !important; } #openAbout:hover { background-color: transparent !important; } </style>').appendTo('desktop');
		} 
		
			// ECG Live: Replaces Chatango with ECG Live
		if (ecglive == 'true') {
    $(".ChatangoChat").empty();
		  $(".ChtnRep").empty();
    $('<div class="window closed" data-title="ECG Live"><script id="cid0020000302726888324" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 100%;height: 100%;">{"handle":"ecglive","arch":"js","styles":{"a":"cc0000","c":"000000","d":"000000","e":"ffffff","f":0,"h":"ffffff","i":0,"k":"cc0000","l":"cc0000","m":"cc0000","n":"ffffff","p":"10","q":"cc0000","t":0,"usricon":0,"sbc":"bbbbbb","surl":0,"cnrs":"0.19","fwtickm":1}}</script></div><style>#window5 > .windowHeader > strong {background-image: url(icons/16ECG.png);} </style>').appendTo('.ChatangoChat');
    $('.ChtnRep').text("ECG Live");
		} 
		
		// Progman: Enables Program Manager for themes other than 3.1
		if (paRameter == 'progman') {
		   $("<style type='text/css'> #progMan { display: inline-block !important; }</style>").appendTo("body");
		} 
		
		
		// No code inserted, does nothing.
		else {
			$('#txt').show();
		}
	});

// Flag code ends here




// Window management code begins here

var i = 0,
minimizedWidth = new Array,
minimizedHeight = new Array,
windowTopPos = new Array,
windowLeftPos = new Array,
panel,
id;

function adjustFullScreenSize() {
	$(".fullSizeWindow .wincontent").css("width", (window.innerWidth - 12));
	$(".fullSizeWindow .wincontent").css("height", (window.innerHeight - 58));
	setTimeout(adjustFullScreenSize, 10);
}
function makeWindowActive(thisid) {
	$(".window").each(function() {      
		$(this).css('z-index', $(this).css('z-index') - 1);
	});
	$("#window" + thisid).css('z-index',1000);
	$(".window").removeClass("activeWindow");
	$("#window" + thisid).addClass("activeWindow");
	
	$(".taskbarPanel").removeClass('activeTab');
	
	$("#minimPanel" + thisid).addClass("activeTab");
}

function minimizeWindow(id){
	windowTopPos[id] = $("#window" + id).css("top");
	windowLeftPos[id] = $("#window" + id).css("left");
	
	$("#window" + id).animate({
		top: 800,
		left: 0
	}, 200, function() {		//animation complete
		$("#window" + id).addClass('minimizedWindow');
		$("#minimPanel" + id).addClass('minimizedTab');
		$("#minimPanel" + id).removeClass('activeTab');
	});	
}

function openWindow(id) {
	if ($('#window' + id).hasClass("minimizedWindow")) {
		openMinimized(id);
	} else {	
		makeWindowActive(id);
		$("#window" + id).removeClass("closed");
		$("#minimPanel" + id).removeClass("closed");
	}
}
function closeWindow(id) {
	$("#window" + id).addClass("closed");
	$("#minimPanel" + id).addClass("closed");
}

function openMinimized(id) {
	$('#window' + id).removeClass("minimizedWindow");
	$('#minimPanel' + id).removeClass("minimizedTab");
	makeWindowActive(id);
		
	$('#window' + id).animate({
		top: windowTopPos[id],
		left: windowLeftPos[id]
	}, 200, function() {
	});				
}

$(document).ready(function(){
	$(".window").each(function() {      		// window template
		$(this).css('z-index',1000)
		$(this).attr('data-id', i);
		minimizedWidth[i] = $(this).width();
		minimizedHeight[i] = $(this).height();
		windowTopPos[i] = $(this).css("top");
		windowLeftPos[i] = $(this).css("left");
		$("#taskbar").append('<div class="taskbarPanel" id="minimPanel' + i + '" data-id="' + i + '"><span class="winName">' + $(this).attr("data-title") + '</span></div>');
		if ($(this).hasClass("closed")) {	$("#minimPanel" + i).addClass('closed');	}		
		$(this).attr('id', 'window' + (i++));
		$(this).wrapInner('<div id="RimetWinContent" class="wincontent"></div>');
		$(this).prepend('<div id="RimetWinHeader" class="windowHeader"><strong>' + $(this).attr("data-title") + '</strong><a id="comments" title="Comments?" class="openWindow" data-id="4"><span id="commentext">Comments?</span></a><span title="Minimize" class="winminimize"><span></span></span><span title="Maximize" class="winmaximize"><span></span><span></span></span><span title="Close" class="winclose"><img id="chiclose" src="minus.png" width="10"></span></div>');
	});
	
	$("#minimPanel" + (i-1)).addClass('activeTab');
	$("#window" + (i-1)).addClass('activeWindow');
	
	$( ".wincontent" ).resizable();			// resizable
	$( ".window" ).draggable({ cancel: ".wincontent" });	// draggable
	

    $(".window").mousedown(function(){		// active window on top (z-index 1000)
		makeWindowActive($(this).attr("data-id"));
    });
	
    $(".winclose").click(function(){		// close window
		closeWindow($(this).parent().parent().attr("data-id"));
    });	

    $(".winminimize").click(function(){		// minimize window
		minimizeWindow($(this).parent().parent().attr("data-id"));
    });	
	
    $(".taskbarPanel").click(function(){		// taskbar click
		id = $(this).attr("data-id");
		if ($(this).hasClass("activeTab")) {	// minimize if active
			minimizeWindow($(this).attr("data-id"));
		} else {
			if ($(this).hasClass("minimizedTab")) {	// open if minimized
				openMinimized(id);
			} else {								// activate if inactive
				makeWindowActive(id);
			}
		}
    });	
	
    $(".openWindow").click(function(){		// open closed window
		openWindow($(this).attr("data-id"));
    });
	
    $(".winmaximize").click(function(){
		if ($(this).parent().parent().hasClass('fullSizeWindow')) {			// minimize
			
			$(this).parent().parent().removeClass('fullSizeWindow');
			$(this).parent().parent().children(".wincontent").height(minimizedHeight[$(this).parent().parent().attr("data-id")]);	
			$(this).parent().parent().children(".wincontent").width(minimizedWidth[$(this).parent().parent().attr("data-id")]);
		} else {															// maximize
			$(this).parent().parent().addClass('fullSizeWindow');
			
			minimizedHeight[$(this).parent().parent().attr('data-id')] = $(this).parent().parent().children(".wincontent").height();
			minimizedWidth[$(this).parent().parent().attr('data-id')] = $(this).parent().parent().children(".wincontent").width();
			
			adjustFullScreenSize();
		}
    });		
	adjustFullScreenSize();	
});



// Window management code ends here


// Fixed Control Panel code starts here

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // Add a click event handler to each tab
  tabs.forEach(tab => {
    tab.addEventListener("click", changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener("keydown", e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // Remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  target.setAttribute("aria-selected", true);

  // Hide all tab panels
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute("hidden", true));

  // Show the selected panel
  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}

// Fixed Control Panel code ends here

/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);

function getQuerystring(key) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == key) {
            return pair[1];
        }
    }
}

const src = getQuerystring('i');
document.getElementById('userPFP').src = src;