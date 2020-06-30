I design this template with bootstrap, jquery and custom css and js. Other I used in some package which is name owl-carousel, isotope, magnific-popup, counterup js. I attach all of the package links and code in down.

-------------------------------------------------------------------------------------------

Owl-Carousel for Slider:

	link Owl-Carousel Css and Js File

	<!-- owl-carousel css file -->
	<link rel="stylesheet" href="./css/owl.carousel.min.css">
	<link rel="stylesheet" href="./css/owl.theme.default.css">

	<!-- owl-carousel js file -->
	<script src="./js/owl.carousel.min.js"></script>

	owl-carousel download link-
	https://owlcarousel2.github.io/OwlCarousel2/


	owl-carousel script code-

	$('.owl-carousel').owlCarousel ({
		loop:true,
		nav:true,
		margin:100,
		autoplay:true,
		autoplayTimeOut:2000,
		smartSpeed:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			}
		}
	})

-------------------------------------------------------------------------------------------

Magnific Popup for Image:
	
	link Magnific Popup Css and Js File

	<!-- magnific-pop -->
	<link rel="stylesheet" href="./vendor/magnific-popup/dist/magnific-popup.css">

	<!-- magnific-popup js -->
	<script src="./vendor/magnific-popup/dist/jquery.magnific-popup.min.js"></script>

	magnific popup download link-
	https://github.com/dimsemenov/Magnific-Popup

	image magnific-popup script code-

	$(document).ready(function () {
 		$('.image-popup-link').magnificPopup({
 			type: 'image',
 			gallery:{enabled:true}
 		});
	})
	
	// .image-popup-link is a class which mean or selector your div or image class

-------------------------------------------------------------------------------------------

Isotope for Image Responsive Position:

	link Isotope Js File

	<!-- isotope js file -->
	<script src="./vendor/isotope/isotope.min.js"></script>

	Isotope download link-
	https://isotope.metafizzy.co/
	
	
	Isotope script code-

	$('.grid').isotope({
  		itemSelector: '.grid-item',
	});

-------------------------------------------------------------------------------------------

Number Counterup System:

	link Counterup Jquery Link

	<!-- jquery counter up js -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>

	number counterup script code-
	
	$('.number').counterUp({delay:10,time:2000});

	//.number is a class which a selector of your counting div or tag class
	

-------------------------------------------------------------------------------------------
Rakib Alom