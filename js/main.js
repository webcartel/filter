$(function(){



	/*add class to body*/

	var mainId = $('main').attr('id');

	if(mainId !== undefined){

		$('body').addClass(mainId + '-page');

	}



	/*popup*/

	$('.top-message .btn-close').click(function () {

		$(this).closest('.top-message').slideUp(300);

	});



	/*bootstrap select*/

	$('.selectpicker').selectpicker({

		style: 'btn-info',

		size: 4

	});



	/*tooltip*/

	$('[data-toggle="tooltip"]').tooltip({

		container: 'body'

	});



	/*open/close filter*/

	$('.wrapper-gray.filters .item-group.active .item').slideDown('1');

	$('.wrapper-gray.filters .item-group .title').click(function () {

		$(this).closest('.item-group').toggleClass('active').find('.item').slideToggle('300');

	});





	/*seo more*/

	$('.text-h').hide();

	$('.seo .more, .wrapper-gray .more, .advantages .more').click(function(e){

		e.preventDefault();



		var dataShow = $(this).attr('data-show');

		var dataHide = $(this).attr('data-hide');

		var thisText = $(this).text();



		if(dataShow == thisText){

			$(this).closest('.seo, .wrapper-gray, .advantages').find('.text-h').toggleClass('active').slideToggle(300);

			$(this).text(dataHide);

		} else{

			$(this).closest('.seo, .wrapper-gray, .advantages').find('.text-h').toggleClass('active').slideToggle(300);

			$(this).text(dataShow);

		}

	});



	/*dropdown dont close*/

	$('.tel .dropdown-menu').on('click', function(e) {

		if($(this).hasClass('dropdown-menu')) {

			e.stopPropagation();

		}

	});



	/*mask*/

	$("[type=tel]").mask("+38(099)999-99-99",{placeholder:"+38(0__)___-__-__"});





	/*btn compare*/

	$('.btn-compare').click(function(e){

		var dataTextNotSelect = $(this).find('.inner').attr('data-text-not-select');

		var dataTextSelect = $(this).find('.inner').attr('data-text-select');

		var thisText = $(this).find('.inner').text();



		if(dataTextNotSelect == thisText){

			$(this).toggleClass('active');

			$(this).find('.inner').text(dataTextSelect);

		} else{

			$(this).toggleClass('active');

			$(this).find('.inner').text(dataTextNotSelect);

		}

	});





	/*Accessories add product-mini*/

	$('[data-added]').click(function(e){

		var dataNotAdded = $(this).attr('data-not-added');

		var dataAdded = $(this).attr('data-added');

		var thisText = $(this).text();

		var thisId = $(this).parents('.product').attr('id');

		var thisTitle = $(this).parents('.product').find('.title').text();

		var thisPrice = $(this).parents('.product').find('.price').html();



		if(dataNotAdded == thisText){

			$(this).toggleClass('active');

			$(this).text(dataAdded);



			$('<div id="clone-' + thisId + '" class="product-mini" style="display: none;">' +

				'<a href="#" class="title">' + thisTitle + '</a>' +

				'<div class="price text-left">' + thisPrice + '</div>' +

				'<button class="btn btn-remove btn-remove-blue"></button>' +

				'</div>').prependTo($('.accessories .bottom.row .w-26-6 .scroll-wrapper .scrollbar-inner')).slideDown(300);



		} else{

			/*$(this).toggleClass('active');

			$(this).text(dataNotAdded);*/

		}



		/*Accessories delete product-mini*/

		$('.accessories .product-mini .btn-remove').click(function () {

			$(this).parents('.product-mini').slideUp(300, function (){$(this).remove()});



			/*remove active class in product-small*/

			var thisId = $(this).parents('.product-mini').attr('id').replace('clone-', '');

			$('.accessories .bottom.row .w-73-4 #'+ thisId + ' .btn-buy').removeClass('active').text(dataNotAdded);

		});



	});

	/*Accessories delete product-mini*/

	$('.accessories .product-mini .btn-remove').click(function () {

		$(this).parents('.product-mini').slideUp(300, function (){$(this).remove()});

	});



	/*product-small more*/

	$('.product-small .more').click(function () {

		$(this).closest('.product-small').find('.content').fadeIn(300);

		$('.product-small .btn-remove').click(function () {

			$(this).closest('.product-small').find('.content').fadeOut(300);

		})

	});



	/*reviews-product add reviews*/

	$('.reviews-product .btn-add-review, .reviews-product .add-review').click(function (e) {

		e.preventDefault();

		$('.reviews-product .inner').slideDown(300);

	});



	/*reviews-product add reviews close inner*/

	$('.reviews-product .btn-close').click(function () {

		$('.reviews-product .inner').slideUp(300);

		$('.reviews-product .inner .add-review-success').slideUp(300);

	});



	/*flipclock*/

	var clock;



	clock = $('.clock-mini').FlipClock({

		clockFace: 'DailyCounter',

		autoStart: false,

		language: 'Russian',

		callbacks: {

			stop: function() {

				$('.message').html('Акция завершена')

			}

		}

	});



	clock.setTime(1920880);

	clock.setCountdown(true);

	clock.start();



	var clockBig;



	clockBig = $('.clock-big').FlipClock({

		clockFace: 'DailyCounter',

		autoStart: false,

		language: 'Russian',

		callbacks: {

			stop: function() {

				$('.message').html('Акция завершена')

			}

		}

	});



	clockBig.setTime(1920880);

	clockBig.setCountdown(true);

	clockBig.start();



	/*btn hamburger*/

	$('.btn-hamburger').click(function () {

		$(this).toggleClass('active');

		$('.header-second').slideToggle(300);

	});



	/*btn btn-toggle-fsw*/

	$('.btn-toggle-fsw').click(function () {

		$(this).toggleClass('active');

		$('#filter-selection-wizard').slideToggle(300);

	});



	/*.catalog-grid .btn-more, .catalog-list .btn-more*/

	$('.catalog-grid .btn-more, .catalog-list .btn-more').click(function () {

		$(this).append('<div class="load"><i class="fa fa-refresh fa-spin fa-2x" aria-hidden="true"></i></div>');

		setTimeout(function () {

			$('.catalog-grid .btn-more .load, .catalog-list .btn-more .load').remove();

		},2000);

	});



	if($(window).width() > 993){

		/*scrollbar*/

		$('.scrollbar-inner').scrollbar();

	}





	/*quantity*/

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');

	$('.quantity').each(function() {

		var spinner = $(this),

			input = spinner.find('input[type="number"]'),

			btnUp = spinner.find('.quantity-up'),

			btnDown = spinner.find('.quantity-down'),

			min = input.attr('min'),

			max = input.attr('max');



		btnUp.click(function() {

			var oldValue = parseFloat(input.val());

			if (oldValue >= max) {

				var newVal = oldValue;

				$(this).addClass('disabled');

			} else {

				var newVal = oldValue + 1;

				$(this).removeClass('disabled');

				$(this).parents('.quantity-nav').find('.quantity-down').removeClass('disabled');

			}

			spinner.find("input").val(newVal);

			spinner.find("input").trigger("change");

			if(newVal == max){

				btnUp.addClass('disabled');

			}

			cartTotal();

		});



		btnDown.click(function() {

			var oldValue = parseFloat(input.val());

			if (oldValue <= min) {

				var newVal = oldValue;

				$(this).addClass('disabled');

			} else {

				var newVal = oldValue - 1;

				$(this).removeClass('disabled');

				$(this).parents('.quantity-nav').find('.quantity-up').removeClass('disabled');

			}

			spinner.find("input").val(newVal);

			spinner.find("input").trigger("change");

			if(newVal == min){

				btnDown.addClass('disabled');

			}

			cartTotal();

		});



		if(input.val() == min){

			btnDown.addClass('disabled');

		}



		if(input.val() == max){

			btnUp.addClass('disabled');

		}



		$('input[type="number"]').keyup(function () {

			var	thisValParse = parseInt($(this).val()),

				maxParse = parseInt($(this).attr('max'));



			if(thisValParse >= maxParse){

				$(this).val(maxParse);

				$(this).parents('.quantity').find('.quantity-up').addClass('disabled');

				$(this).parents('.quantity').find('.quantity-down').removeClass('disabled');

			}

			cartTotal();

		});

	});



	/*modal-cart remove*/

	$('#modal-cart .item .btn-remove').click(function () {

		$(this).parents('.item').slideUp(300, function(){

			$(this).remove();

			cartTotal();

		});

	});



	/*cart total*/

	function cartTotal (){

		var total = 0;

		$('#modal-cart .item .price').each(function(){

			var itemPrice = $(this).find('.old-price').remove(),

				itemPrice = $(this).text().replace(' ', ''),

				itemPrice = parseInt(itemPrice),

				itemQuantity = $(this).parents('.item').find('[type="number"]').val(),

				itemQuantityTotal = itemPrice * itemQuantity;



			total += parseInt(itemQuantityTotal, 10);

		});

		var totalCurrency = $('#modal-cart .total .currency').html(),

			totalPrice = $('#modal-cart .total').find('.old-price').remove(),

			totalPrice = totalPrice.text().replace(' ', ''),

			totalPrice = parseInt(totalPrice);



		$('#modal-cart .total').text(total).append(' <span class="currency">' + totalCurrency + '</span>');

		/*.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1")*/

	}

	cartTotal();



	if($(window).width() < 992){

		/*search replace*/

		$('.header-cart').after($('.menu-main .search'));



		/*tab replace*/

		$('.front-page .wrapper-tab .tab-content').before($('.front-page .wrapper-tab .nav-tabs'));



		/*aside replace*/

		$('.catalog-page .dropdown-menu-filter .scrollbar-inner').prepend($('.catalog-page aside'));

		$('.catalog-page .dropdown-menu-filter .scrollbar-inner').append($('<button class="btn btn-filter-submit w-100">Применить</button>'));



		/*tab scroll*/

		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

			$('body').animate({scrollTop : $('#section-tab-front .nav-tabs').offset().top },500);

		});



		/*filter toggle tablet*/

		$('.dropdown-toggle-filter').on('click', function (e) {

			$('.overlay').toggleClass('active');

			$(this).parent().toggleClass('open');

			$('body').animate({scrollTop : $('.dropdown-toggle-filter').offset().top },500);

			$('body').toggleClass('active');

		});



		/*overlay*/

		$('.overlay').on('click', function (e) {

			$('.dropdown-toggle-filter').parent().toggleClass('open');

			$('.overlay').toggleClass('active');

			$('body').toggleClass('active');

		});



		/*select-block*/

		$('.select-block .title').click(function () {

			$(this).parent().children('.item').slideToggle('300');

			$(this).parent().find('.btn-reset').slideToggle('300');

			$(this).parent().children('.title').slidedown('1');

		});



		/*Accessories replace */

		$('.accessories .bottom .w-26-6').before($('.accessories .top .w-26-6'));

		$('.accessories .bottom ').after($('.accessories .wrapper-price'));



		/*scrollbar*/

		$('.scrollbar-inner').scrollbar();

	}



	$( window ).resize(function() {

		/*search replace*/

		$('.menu-main ul').append($('.header-cart + .search'));

	});





	/*slider single*/

	$('.slider-single').slick({
		arrows: true,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});



	/*slider-together-cheaper*/

	$('.slider-together-cheaper').slick({

		arrows: true,

		dots: false,

		fade: false,

		autoplay: true,

		autoplaySpeed: 5000,

		infinite: false

		/*cssEase: 'linear'*/

	});



	/*slider reviews*/

	$('.slick-reviews').slick({

		arrows: true,

		dots: true,

		fade: true,

		cssEase: 'linear'

	});



	/*slider product*/

	$('.slider-product').slick({

		arrows: true,

		dots: false,

		infinite: true,

		variableWidth: true,

		lazyLoad: 'ondemand',

		lazyLoadBuffer: 0,

		slidesToShow: 4,

		slidesToScroll: 1

	});



	/*slider random*/

	$('.slider-random').slick({

		arrows: true,

		dots: false,

		infinite: false,

		slidesToScroll: 1,

		variableWidth: true

	});



	/*slider examples*/

	var $status = $('.pagingInfo');

	var $slickElement = $('.slider-examples');



	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){

		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)

		var i = (currentSlide ? currentSlide : 0) + 1;

		$status.text(i + ' из ' + slick.slideCount);

	});



	$slickElement.slick({

		arrows: true,

		dots: false,

		infinite: false,

		fade: true,

		cssEase: 'linear',

		asNavFor: '.slider-examples-nav'

	});



	var $slickElementNav = $('.slider-examples-nav');

	$slickElementNav.slick({

		arrows: false,

		dots: false,

		infinite: false,

		fade: true,

		cssEase: 'linear',

		asNavFor: '.slider-examples'

	});



	/*slider-for (product img)*/

	$('.slider-for').slick({

		slidesToShow: 1,

		slidesToScroll: 1,

		arrows: true,

		fade: false,

		adaptiveHeight: false,

		asNavFor: '.slider-nav'

	});

	/*slider-for (product img thumbnail)*/

	$('.slider-nav').slick({

		slidesToShow: 5,

		slidesToScroll: 1,

		asNavFor: '.slider-for',

		dots: false,

		centerMode: false,

		focusOnSelect: true,

		responsive: [

			{

				breakpoint: 769,

				settings: {

					vertical: true

				}

			}

		]

	});



	/*slider-for-vertical (product img)*/

	$('.slider-for-vertical').slick({

		slidesToShow: 1,

		slidesToScroll: 1,

		arrows: true,

		fade: false,

		adaptiveHeight: false,

		asNavFor: '.slider-nav-vertical'

	});

	/*slider-for-vertical (product img thumbnail)*/

	$('.slider-nav-vertical').slick({

		slidesToShow: 5,

		slidesToScroll: 1,

		asNavFor: '.slider-for-vertical',

		dots: false,

		centerMode: false,

		focusOnSelect: true,

		adaptiveHeight: false,

		vertical: true

	});



	/*modal slider*/

	$('#modal-slider').on('show.bs.modal', function (e) {

		setTimeout(function () {

			console.log('www');

			$('.slider-for-vertical').slick('resize');

			$('.slider-nav-vertical').slick('resize');

		},500);



	});



	$('.slick-slider .slick-prev').html('<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300"><path fill="#7d848e" d="M133.1,245.8c0-3.5-1.2-8.1-4.6-11.5L57,163.8h226.2c10.4,0,17.3-6.9,17.3-16.2s-6.9-16.2-17.3-16.2H55.8 l71.5-69.2c3.5-3.5,4.6-6.9,4.6-11.5s-1.2-8.1-4.6-11.5c-6.9-6.9-17.3-6.9-23.1,0L5.1,137.3c-1.2,1.2-1.2,2.3-2.3,2.3 c-3.5,4.6-3.5,10.4-1.2,15c1.2,2.3,2.3,3.5,3.5,5.8l0,0l99.2,98.1c6.9,6.9,17.3,6.9,23.1,0C130.8,255,133.1,250.4,133.1,245.8z"/></svg>');

	$('.slick-slider .slick-next').html('<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 20" enable-background="new 0 0 26 20"><path fill="#7d848e" d="M14.5,1.5c0,0.3,0.1,0.7,0.4,1l6.2,6.1H1.5C0.6,8.6,0,9.2,0,10c0,0.8,0.6,1.4,1.5,1.4h19.7l-6.2,6 c-0.3,0.3-0.4,0.6-0.4,1c0,0.4,0.1,0.7,0.4,1c0.6,0.6,1.5,0.6,2,0l8.6-8.5c0.1-0.1,0.1-0.2,0.2-0.2c0.3-0.4,0.3-0.9,0.1-1.3 c-0.1-0.2-0.2-0.3-0.3-0.5l0,0L17,0.4c-0.6-0.6-1.5-0.6-2,0C14.7,0.7,14.5,1.1,14.5,1.5z"/></svg>');



	$('.slick-reviews .slick-dots').wrap('<div class="text-center"></div>');

	$('.slick-reviews .slick-dots').before($('.slick-reviews .slick-prev '));

	$('.slick-reviews .slick-dots').after($('.slick-reviews .slick-next'));





});






(function($) {
    
    $.fn.tabsPlugin = function( options ) {
        
        var settings = $.extend({
            "option" : "value"
		}, options);
        
        return this.each(function( index ){
            
            var ths = $(this);

            ths.find('.tab-cnt').hide();
            ths.find('.tab-cnt').each(function(index, el) {
            	if ( $(this).index() == 0 ) {
            		$(this).show(0);
            	}
            });
            ths.find('.tab-btn').on('click', function(e) {
            	e.preventDefault();
            	var clickEl = $(this);
            	ths.find('.tab-cnt').hide();
            	ths.find('.tab-btn').removeClass('active');
            	ths.find('.tab-cnt').each(function(index, el) {
            		if ( index == clickEl.index() ) {
            			$(this).show(0);
            			clickEl.addClass('active');
            		}
            	});
            });

        });
    };
    
})(jQuery);



// ///////////////////////////////
$(document).ready(function() {

	$('#popular_ptoducts').tabsPlugin();

	// Tabs
	$(function() {
		$('#tabs-block .tab-cnt').hide();
		$('#tabs-block .tab-cnt').each(function(index, el) {
			if ( $(this).index() == 0 ) {
				$(this).show(0);
			}
		});
		$('#tabs-block .tab-btn').on('click', function(e) {
			e.preventDefault();
			var clickEl = $(this);
			$('#tabs-block .tab-cnt').hide();
			$('#tabs-block .tab-btn').removeClass('active');
			$('#tabs-block .tab-cnt').each(function(index, el) {
				if ( index == clickEl.index() ) {
					$(this).show(0);
					clickEl.addClass('active');
				}
			});
		});
	});

	// Search block
	$(function() {
		$('#search_block_open').on('click', function(e) {
			e.preventDefault();
			$('#search-block').show();
		});
		$('#search_block_close').on('click', function(e) {
			e.preventDefault();
			$('#search-block').hide();
		});
	});


	/* work_examples_slider */
	$('#work_examples_slider').slick({
		arrows: true,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		appendDots : $('.sliderdots'),
		appendArrows : $('.sliderarrows'),
		prevArrow:'<button class="slider_arrow_l"></button>',
		nextArrow:'<button class="slider_arrow_r"></button>', 
	});
});