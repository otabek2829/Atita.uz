$(document).ready(function ($) {
	function animateElements() {
		$('.progressbar').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle').attr('data-percent');
			var percentage = parseInt(percent, 10) / parseInt(100, 10);
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent / 100,
					size: 230,
					thickness: 15,
					emptyFill: "#f4f5fc",
					animation: {
						duration: 2200,
						easing: "circleProgressEasing"
					},
					fill: {
						color: '#e23e3e',
						// image: 'http://i.imgur.com/pT0i89v.png'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue * 100).toFixed(0) + "%");
				}).stop();
			}
		});
		$('.progressbar2').each(function () {
			var elementPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var percent = $(this).find('.circle').attr('data-percent');
			var percentage = parseInt(percent, 10) / parseInt(100, 10);
			var animate = $(this).data('animate');
			if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
				$(this).data('animate', true);
				$(this).find('.circle').circleProgress({
					startAngle: -Math.PI / 2,
					value: percent / 100,
					size: 230,
					thickness: 15,
					emptyFill: "#f4f5fc",
					animation: {
						duration: 2400,
						easing: "circleProgressEasing"
					},
					fill: {
						color: '#4dcd92',
						// image: 'http://i.imgur.com/pT0i89v.png'
					}
				}).on('circle-animation-progress', function (event, progress, stepValue) {
					$(this).find('div').text((stepValue * 100).toFixed(0) + "%");
				}).stop();
			}
		});
	}

	// Show animated elements
	animateElements();
	$(window).scroll(animateElements);






	
	
}); //end document ready function