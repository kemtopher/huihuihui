// MUST OPEN SCRIPT LIKE THIS BECAUSE OF TURBOLINKS
var ready;
ready = function() {

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
				tallPristine = 'https://s3.amazonaws.com/huioy.com/poster_tall-box-vacant.png',
				boxPristine = 'https://s3.amazonaws.com/huioy.com/poster_box-vacant.png';

			if ( bgPosition == "#lowBG" ) {
				$( bgPosition ).css('background-image', 'url(' + tallPristine + ')' );	
			} else {
				$( bgPosition ).css('background-image', 'url(' + boxPristine + ')' );
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
    	console.log('some js has been disabled');
    }
};

var x = window.matchMedia("(min-width: 769px)")
noMobile(x) // Call listener function at run time
x.addListener(noMobile) // Attach listener function on state changes












	$("#project-list").sortable({
		update: function(e, ui) {
			Rails.ajax({
				url: $(this).data("url"),
				type: "PATCH",
				data: $(this).sortable('serialize')
			});
		}
	});


	// MENU 

	$('#info').click( function(e) {
		e.preventDefault();

		$('#header').toggleClass('open', 300).promise().done( function() {

			if ( $('#header').hasClass('open') ) {
				$('.site-nav').css('border-top','solid 1px #000000');
				$('.info-section').slideDown();
				// $('#header').css('position','absolute');
			} else {
				$('.site-nav').css('border-top','solid 0px #000000');
				$('.info-section').slideUp();
				// $('#header').css('position','fixed');
			}

			$('#info-btn').toggleClass('info-btn-active');
		});
	});


	// RANDOM LINK FOR TITLE CLICK
	// $('#random_link').click(
	// 	function(e) {
	// 		e.preventDefault();

	// 		var links = [
	//               "../pages/pages/3d.html",
	//               "../pages/pages/about-the-work.html",
	//               "../pages/pages/apple.html",
	//               "../pages/pages/baby-making-music-fortunes.html",
	//               "../pages/pages/banned-china.html",
	//               "../pages/pages/boston-prep.html",
	//               "../pages/pages/choking-victim.html",
	//               "../pages/pages/daily-headlines.html",
	//               "../pages/pages/droppin-millibars.html",
	//               "../pages/pages/elenis-cookies.html",
	//               "../pages/pages/event-posters.html",
	//               "../pages/pages/nightsnack-club-tote.html",
	//               "../pages/pages/parasite-museum.html",
	//               "../pages/pages/runaway-inequality-flyer.html",
	//               "../pages/pages/seasense-stationery.html",
	//               "../pages/pages/squoval-sans.html",
	//               "../pages/pages/tri-it-at-home-cookbooks.html"
	//         ];
	//         // console.log(links);

	//         var i = parseInt( Math.random() * sites.length);

	//         location.href = sites[i];
	// });


	// SCROLL TO TOP LINK

	$('#top-link-icon').on( 'click',function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0},300);
	})


	// BOTTOM TO TOP LINK FUNCTION
	
	var figure = $('.top-link'),
		trigger = $('.single-img:eq(1)');

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









