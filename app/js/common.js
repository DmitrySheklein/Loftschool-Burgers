$(function() {

	// Custom JS
	$("#fullpage").fullpage({
		verticalCentered: false
	})

	// Slider
 	$('.slider__wrapper').owlCarousel({
		dots : false,
		nav:false,
		slideSpeed : 800,
		paginationSpeed : 400,
		singleItem: true,
		items: 1
	})
	var slider = $('.slider__wrapper');
	$('.slider__arrow--left').on('click', function(e) {
		e.preventDefault();
		slider.trigger('prev.owl.carousel');
	});	
	$('.slider__arrow--right').on('click', function(e) {
		e.preventDefault();
		slider.trigger('next.owl.carousel');
	});	
	//Accordeon
	$('.team__accord .team__accord-link').on('click', function(){
		var $this = $(this),
			content = $this.next();
		$('.team__accord .team__accord-info:visible').not(content).slideUp(300)
		$('.team__accord .team__accord-link').not($this).removeClass('active')
		$this.toggleClass('active')
		content.slideToggle(300)
	})
});