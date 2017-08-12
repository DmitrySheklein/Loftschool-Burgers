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
	//Accordeon vertical
	$('.team__accord .team__accord-link').on('click', function(e){
		e.preventDefault()
		var $this = $(this),
			content = $this.next();
		$('.team__accord .team__accord-info:visible').not(content).slideUp(300)
		$('.team__accord .team__accord-link').not($this).removeClass('active')
		$this.toggleClass('active')
		content.slideToggle(300)
	})
	//Accordeon gorizontal
	$('.menu-accord .menu-accord__link').on('click', function(e){
		e.preventDefault()
		var $this = $(this),
			item = $this.closest('.menu-accord__item');
		if(!item.hasClass('active')){
			item.addClass('active')
			.siblings()
			.removeClass('active')
		} else {
			item.removeClass('active')
		}
	})
	$(document).on('click', function(event) {
	var menu = $(event.target).closest('.menu-accord'),
		items = $('.menu-accord__item');

	if (!menu.length) {
		console.log(1)
		items.removeClass('is-active');
	}
	});	
	//Input mask
	$('input[type=tel]').inputmask("+7 (999) 999 99 99");
	console.log($('input[type=tel]'))
});