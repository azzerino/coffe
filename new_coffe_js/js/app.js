$(document).ready(function () {
	// sidebar menu
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
	// slider
	$(".the_slider").slicarousel({
		nbr_slides: 2,
		delay: 4000,
		speed: 800,
		full_width: true,
		arrows: false,
		"autoplay": {
			"enabled": true, // Enable autoplay slider
			"direction": "rtl" // direction right to left rtl or left to right ltr
		},
	});

});
