// $(".owl-carousel").owlCarousel({
// 	loop: true,
// 	margin: 10,
// 	nav: true,
// 	responsive: {
// 		0: {
// 			items: 1,
// 		},
// 		600: {
// 			items: 3,
// 		},
// 		1000: {
// 			items: 5,
// 		},
// 	},
// });

$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});

$(".owl-carousel-5").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		800: {
			items: 4,
		},
		1000: {
			items: 5,
		},
	},
});

$(".owl-carousel-6").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		800: {
			items: 5,
		},
		1000: {
			items: 6,
		},
	},
});

$(".owl-carousel-1").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});
