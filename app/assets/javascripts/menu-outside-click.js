
$(document).ready(function() {

	// DETECT SWIPE FROM TOUCH DEVICES
	function detectswipe(el,func) {
		swipe_det = new Object();
		swipe_det.sX = 0;
		swipe_det.sY = 0;
		swipe_det.eX = 0;
		swipe_det.eY = 0;
		var min_x = 20;  //min x swipe for horizontal swipe
		var max_x = 40;  //max x difference for vertical swipe
		var min_y = 40;  //min y swipe for vertical swipe
		var max_y = 50;  //max y difference for horizontal swipe
		var direc = "";
		ele = document.getElementById(el);

		ele.addEventListener('touchstart',function(e){
			var t = e.touches[0];
			swipe_det.sX = t.screenX; 
			swipe_det.sY = t.screenY;
		},false);
		
		ele.addEventListener('touchmove',function(e){
			e.preventDefault();
			var t = e.touches[0];
			swipe_det.eX = t.screenX; 
			swipe_det.eY = t.screenY;    
		},false);

		ele.addEventListener('touchend',function(e){

			//vertical detection
			if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x)))) {
				if(swipe_det.eY > swipe_det.sY) direc = "d";
				else direc = "u";
			}

			if (direc != "") {
				if(typeof func == 'function') func(el,direc);
			}

			direc = "";
		},false);  
	};

	function closeMenu() {
		$('.site-nav').css('border-top','solid 0px #000000');
		$('.info-section').slideUp('slow', function() {
			$('#header').removeClass('open');
			$('#info-btn').removeClass('info-btn-active');
		});

		// MOBILE ADJUSTMENTS
		var screenWidth = screen.width;
		if ( screenWidth < 768) {
			$('body').css('overflow-y', 'scroll');	
		}
	};

	function openMenu() {
		$('.site-nav').css('border-top','solid 1px #000000');
		$('.info-section').slideDown('slow', function() {
			$('#header').addClass('open');
			$('#info-btn').addClass('info-btn-active');
		});

		// MOBILE ADJUSTMENTS
		var screenWidth = screen.width;
		if ( screenWidth < 768) {
			$('body').css('overflow-y', 'hidden');	
		}
	};


	// MAIN EVENT STARTER

	$('#info').click( function(e) {
		e.preventDefault();

		if ( $('#header').hasClass('open') ) {
			closeMenu();
		} else {
			openMenu();
		};
	});

	detectswipe('site-nav', function() {
		if ( $('#header').hasClass('open') ) {
			closeMenu();
		} else {
			openMenu();
		}
	});






});




