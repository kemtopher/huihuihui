// MUST OPEN SCRIPT LIKE THIS BECAUSE OF TURBOLINKS
var ready;
ready = function() {


	function haveBeen() {
		
		function setCookie(cname, cvalue, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+ d.toUTCString();
		    document.cookie = cname + "=" + cvalue + "; " + expires;
		}

		function getCookie(cname) {
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0) {
		            return c.substring(name.length,c.length);
		        }
		    }
		    return "";
		}
		
		function checkCookie() {
		    var visited = getCookie("visitedornot");
		    if (visited != "") {
		        document.location = '<%= url_for( root_path ) %>';
		        
		    } else {
		       visited = "visited";
		       if (visited != "" && visited != null) {
		           setCookie("visitedornot", visited, 1000);
		       }
		       document.location = '<%= url_for( @projects.first ) %>';
		    }
		}
	};

	function noMobile(x) {
	    if (x.matches) {
	    	// THESE FUCTIONS RUN WHEN NOT A MOBILE SIZED DEVISE
	        
			// BOTTOM NAVIGATION TITLES
			$('.nav-title-wrap').hover( function() {
				$(this).children('.project-nav-title').css('display','block');
			}, function() {
				$(this).children('.project-nav-title').css('display','none');
			});

			// PROJECT POSTERS ON HOVER
			$(".project-wrap").hover(
				function() {
					var posterHost = $(this).find(".project-box"),
						posterImg = posterHost.attr("data-poster"),
						bgPosition = posterHost.attr("data-position");

						$( bgPosition ).css( 'background-image','url(' + posterImg + ')' );

			}, function() {
				var posterHost = $(this).find(".project-box"),
					posterImg = posterHost.attr("data-poster"),
					bgPosition = posterHost.attr("data-position"),
					tallPristine = '/images/poster-tall-box-vacant.jpg',
					boxPristine = '/images/poster-box-vacant.jpg',
					revBoxPristine = '/images/poster-reverse-box-vacant.jpg';

				if ( bgPosition == "#lowBG" ) {
					$( bgPosition ).css('background-image', 'url(' + tallPristine + ')' );	
				} else if ( bgPosition == "#topBG") {
					$( bgPosition ).css('background-image', 'url(' + boxPristine + ')' );
				} else {
					$( bgPosition ).css('background-image', 'url(' + revBoxPristine + ')' );
				}
			});

			// PROJECT CURSOR CHANGES
			$(".project-wrap").hover( function() {
				var pointerImg = $(this).attr("data-cursor"),
					pointerWrap = $(this).find('a');

				$( pointerWrap ).css('cursor', 'url(' + pointerImg + '), auto' );

			}, function() {
				var pointerImg = $(this).attr("data-cursor"),
					pointerWrap = $(this).find('a');

				$( pointerWrap ).css('cursor', 'pointer');
			});

	    } else {
	    	console.log("h e l l o  m o t o");
	    }
	};

	var x = window.matchMedia("(min-width: 769px)")
	noMobile(x) // Call listener function at run time
	x.addListener(noMobile) // Attach listener function on state changes



	// JQUERY SORTABLE IN PROJECTS

	$("#project-list, #photos-list").sortable({
		update: function(e, ui) {
			Rails.ajax({
				url: $(this).data("url"),
				type: "PATCH",
				data: $(this).sortable('serialize')
			});
		}
	});


	// MENU 

	// $('#info').click( function(e) {
	// 	e.preventDefault();

	// 	$('#header').toggleClass('open', 300).promise().done( function() {

	// 		if ( $('#header').hasClass('open') ) {
	// 			$('.site-nav').css('border-top','solid 1px #000000');
	// 			$('.info-section').slideDown();
				
	// 			// MOBILE FUNCTIONALITY
	// 			var screenWidth = screen.width;
	// 		    if ( screenWidth < 768) {
	// 		    	$('body').css('overflow-y', 'hidden');	
	// 		    }
	// 		} else {
	// 			$('.site-nav').css('border-top','solid 0px #000000');
	// 			$('.info-section').slideUp();

	// 			// MOBILE FUNCTIONALITY
	// 			var screenWidth = screen.width;
	// 		    if ( screenWidth < 768) {
	// 		    	$('body').css('overflow-y', 'scroll');
	// 		    }
	// 		}

	// 		$('#info-btn').toggleClass('info-btn-active');
	// 	});
	// });
	


	// SCROLL TO TOP LINK

	var imgs= $('.single-img').length;
	console.log(imgs);
	if ( imgs > 2 ) {
		$('#top-link-icon').on( 'click',function(e) {
			e.preventDefault();
			$('html, body').animate( { scrollTop: 0 }, 300 );
		});
	} else {
		$('#top-link-icon').css('display', 'none');
	}
	


	// BOTTOM TO TOP LINK FUNCTION
	
	var figure = $('.top-link'),
		trigger = $('.single-img:eq(3)');

	var controller = new ScrollMagic.Controller();
	
	new ScrollMagic.Scene({
		triggerElement: trigger
	})
	.setClassToggle(figure, 'active-link')
	.addTo(controller);


	// BOTTOM FOOTER APPEARS AT PAGES END
	
	// var bottomTrigger = $('.single-img').last(),
	var bottomTrigger = $('.bottom-img'),
		bottomNav = $('.single-project-nav');

	new ScrollMagic.Scene({
		triggerElement: bottomTrigger,
		triggerHook: 'onEnter'
	})
	.setClassToggle(bottomNav, 'rise-up')
	// .addIndicators({
	// 	name: 'bottomPage'
	// })
	.addTo(controller);

};

$(document).ready(ready);
$(document).on('page:load', ready);









