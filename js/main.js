
// header-area owl-carousel script
$('.header-area .owl-carousel').owlCarousel ({
	loop:true,
	autoplay:true,
	autoplayTimeOut:4000,
	smartSpeed:2000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		}
	}
})

//service img source
function changeImage1(){
	document.getElementById('service-img').src = "./img/services/service1.jpg";
}
function changeImage2(){
	document.getElementById('service-img').src = "./img/services/service2.jpg";
}
function changeImage3(){
	document.getElementById('service-img').src = "./img/services/service3.jpg";
}

// comment1 owl-carousel script
$('.comment-area .owl-carousel').owlCarousel ({
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

// about-team owl-carousel script
$('.about-team .owl-carousel').owlCarousel ({
	loop:true,
	nav:true,
	margin:100,
	autoplay:true,
	autoplayTimeOut:2000,
	smartSpeed:2000,
	autoplayHoverPause:true,
	autoWidth:true,
	autoHeight:true,
	responsive:{
		0:{
			items:1
		}
	}
})

// sponser owl-carousel script
$('.sponser-area .owl-carousel').owlCarousel ({
	loop:true,
	margin:100,
	autoplay:true,
	autoplayTimeOut:2000,
	smartSpeed:2000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:3
		},
		600:{
			items: 4
		},
		1000:{
			items: 6
		}
	}
})

// comment2 owl-carousel script
$('.comment-area-2 .owl-carousel').owlCarousel ({
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

// image magnific-popup script
$(document).ready(function () {
 	$('.portfolio-area .image-section .image-popup-link').magnificPopup({
 		type: 'image',
 		gallery:{enabled:true}
 	});
})

//counter count script
$('.number').counterUp({delay:10,time:2000});