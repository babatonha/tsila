 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";


  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {

		if ( $('.hero-slide').length > 0 ) {
			$('.hero-slide').owlCarousel({
				items: 1,
				loop: true,
				margin: 0,
				autoplay: true,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				smartSpeed: 1000
			});
		}

		if ( $('.owl-slide-3').length > 0 ) {
			$('.owl-slide-3').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 30,
				autoplay: true,
				smartSpeed: 500,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						items: 2
					},
					1000:{
						items: 2
					},
					1200:{
						items: 3
					}
				}
			});
		}

		if ( $('.owl-slide').length > 0 ) {
			$('.owl-slide').owlCarousel({
		    center: false,
		    items: 2,
		    loop: true,
				stagePadding: 0,
		    margin: 30,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        }
		    }
			});
		}


		if ( $('.nonloop-block-14').length > 0 ) {
			$('.nonloop-block-14').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  // Global flag to prevent scroll detection from interfering during programmatic scrolling
  window.navIsScrolling = false;
  
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;
      var $target = $(hash);
      var $clickedLi = $(this).closest('li');
      
      if ($target.length) {
        // Set flag immediately to prevent scroll detection interference
        window.navIsScrolling = true;
        
        // Remove active class from all nav links (li only, not a tags)
        $('.main-menu li').removeClass('active');
        $('.main-menu li a').removeClass('active');
        
        // Add active class to clicked nav link's parent li immediately (NOT the a tag)
        $clickedLi.addClass('active');

        // Find the span with footerTextColor class (the text above the heading)
        var $span = $target.find('span.footerTextColor').first();
        
        // If no span found, try to find the heading (h3, h2, or h1) as fallback
        var $heading = $span.length ? null : $target.find('h3, h2, h1').first();
        
        // Use span if found, otherwise heading, otherwise the target element itself
        var $scrollTarget = $span.length ? $span : ($heading.length ? $heading : $target);
        
        // Calculate scroll position: span position minus navbar height, plus a few pixels above
        var navbarHeight = $('.site-navbar').outerHeight() || 100;
        var extraOffset = 30; // A few pixels above the span
        var scrollPosition = $scrollTarget.offset().top - navbarHeight - extraOffset;

        $('html, body').animate({
          'scrollTop': scrollPosition
        }, 600, 'easeInOutCirc', function(){
          // Update URL hash without triggering browser scroll
          if (history.replaceState) {
            history.replaceState(null, null, hash);
          } else {
            window.location.hash = hash;
            // Force scroll position back if browser jumped
            $('html, body').scrollTop(scrollPosition);
          }
          
          // Ensure active state is maintained after scroll completes (li only)
          $('.main-menu li').removeClass('active');
          $clickedLi.addClass('active');
		  $('.main-menu li a').removeClass('active');
          
          // Reset flag after scroll completes and a longer delay to prevent interference
          setTimeout(function() {
            window.navIsScrolling = false;
          }, 400);
        });
      }

    });
  };
  OnePageNavigation();
  
  // Handle Home link click
  $("body").on("click", ".main-menu li a[href='index.html']", function(e) {
    // If already on index.html, scroll to top and set active
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
      e.preventDefault();
      $('.main-menu li').removeClass('active');
      $('.main-menu li a').removeClass('active');
      $(this).closest('li').addClass('active');
      
      $('html, body').animate({
        'scrollTop': 0
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = '';
      });
    }
  });
  
  // Set initial active state based on URL hash
  var setInitialActiveState = function() {
    var hash = window.location.hash;
    if (hash) {
      $('.main-menu li').removeClass('active');
      $('.main-menu li a').removeClass('active');
      $('.main-menu li a[href="' + hash + '"]').closest('li').addClass('active');
    } else {
      // If no hash, set Home as active
      $('.main-menu li').removeClass('active');
      $('.main-menu li a').removeClass('active');
      $('.main-menu li a[href="index.html"]').closest('li').addClass('active');
    }
  };
  setInitialActiveState();

  var siteScroll = function() {

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  		// Update active nav link based on scroll position
  		// Skip if we're in the middle of a programmatic scroll
  		if (window.navIsScrolling) {
  			return;
  		}
  		
  		var scrollPos = st + 150; // Offset for better detection
  		
  		$('.main-menu li a[href^="#"]').each(function() {
  			var currLink = $(this);
  			var refElement = $(currLink.attr("href"));
  			
  			if (refElement.length) {
  				var elementTop = refElement.offset().top;
  				var elementBottom = elementTop + refElement.outerHeight();
  				
  				if (elementTop <= scrollPos && elementBottom > scrollPos) {
  					// Remove active from all
  					$('.main-menu li').removeClass('active');
  					$('.main-menu li a').removeClass('active');
  					// Add active to current li only
  					currLink.closest('li').addClass('active');
  				}
  			}
  		});
  		
  		// Handle home link (index.html) - if scrolled to top
  		if (st < 100) {
  			$('.main-menu li').removeClass('active');
  			$('.main-menu li a').removeClass('active');
  			$('.main-menu li a[href="index.html"]').closest('li').addClass('active');
  		}

  	}) 

  };
	siteScroll();
	

	$(function () {
		// $("#bgndVideo").YTPlayer();
	});

});


//FRAQ

function myFraq1() {
	var faq1 = document.getElementById("faq1");

	if (faq1.style.display === "none") {
		faq1.style.display = "block";
	} else {
		faq1.style.display = "none";
	}
  }

  function myFraq2() {
	var faq2 = document.getElementById("faq2");

	if (faq2.style.display === "none") {
		faq2.style.display = "block";
	} else {
		faq2.style.display = "none";
	}
  }
  function myFraq3() {
	var faq3 = document.getElementById("faq3");
	
	if (faq3.style.display === "none") {
		faq3.style.display = "block";
	} else {
		faq3.style.display = "none";
	}
  }