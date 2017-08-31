$(function(){

	/*textarea.form-control validate*/
	$('textarea.form-control').keyup(function() {
		$(this).parents('.form-group').removeClass('has-error has-success');
		$(this).parents('.form-group').find('.help-block').slideUp(300);
	});

	/*text .form-control validate*/
	$('[type=tel].form-control').keyup(function() {
		$(this).parents('.form-group').removeClass('has-error has-success');
		$(this).parents('.form-group').find('.help-block').slideUp(300);
	});

	/*text .form-control validate*/
	$('[type=text].form-control').keyup(function() {
		$(this).parents('.form-group').removeClass('has-error has-success');
		$(this).parents('.form-group').find('.help-block').slideUp(300);
	});

	/*email validate*/
	$('[type="email"]').keyup(function() {
		var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		if(pattern.test($(this).val())){
			$(this).parents('.form-group').removeClass('has-error has-success');
			$(this).parents('.form-group').find('.help-block').slideUp(300);
		} else {
			$(this).parents('.form-group').removeClass('has-success').addClass('has-error');
			$(this).parents('.form-group').find('.help-block').slideDown(300);
		}
	});

	/*rating validate*/
	$('form .your-rating .rating').click(function() {
		$(this).parents('.form-group').removeClass('has-error has-success');
		$(this).parents('.form-group').find('.help-block').slideUp(300);
	});

	/*form reviews-product*/
	$('.reviews-product [type=submit]').click(function(e){
		e.preventDefault();
		if($('.reviews-product .form-group').hasClass('has-error')){
		} else if($('.reviews-product [type="email"]').val() == ''){
			$('.reviews-product [type="email"]').parents('.form-group').removeClass('has-success').addClass('has-error');
			$('.reviews-product [type="email"]').parents('.form-group').find('.help-block').slideDown(300);
		} else if($('.reviews-product textarea').val() == ''){
			$('.reviews-product textarea').parents('.form-group').removeClass('has-success').addClass('has-error');
			$('.reviews-product textarea').parents('.form-group').find('.help-block').slideDown(300);
		} else if( ! $(" .reviews-product input").is(':checked')){
			$('.reviews-product .your-rating').parents('.form-group').removeClass('has-success').addClass('has-error');
			$('.reviews-product .your-rating').parents('.form-group').find('.help-block').slideDown(300);
		} else{
			/*reviews-product add reviews success*/
			$(this).append('<div class="load"><i class="fa fa-refresh fa-spin fa-2x" aria-hidden="true"></i></div>');

			setTimeout(function () {
				$('.reviews-product [type=submit] .load').remove();
				$('.reviews-product .inner .add-review-success').slideDown(300);
			},2000);

			/*$(this).parents('form').submit();  ajax */
		}
	});


	/*form buy-in-1-click*/
	$('.form-buy-in-1-click [type=submit]').click(function (e) {
		e.preventDefault();
		if($('.form-buy-in-1-click .form-group').hasClass('has-error')){
		} else if($('.form-buy-in-1-click [type="text"]').val() == ''){
			$('.form-buy-in-1-click [type="text"]').parents('.form-group').removeClass('has-success').addClass('has-error');
			$('.form-buy-in-1-click [type="text"]').parents('.form-group').find('.help-block').slideDown(300);
		} else if($('.form-buy-in-1-click [type=tel]').val() == ''){
			$('.form-buy-in-1-click [type=tel]').parents('.form-group').removeClass('has-success').addClass('has-error');
			$('.form-buy-in-1-click [type=tel]').parents('.form-group').find('.help-block').slideDown(300);
		} else{
			/*success*/
			$(this).append('<div class="load"><i class="fa fa-refresh fa-spin fa-2x" aria-hidden="true"></i></div>');

			setTimeout(function () {
				$('.form-buy-in-1-click [type=submit] .load').remove();
				$('#modal-buy-in-1-click').modal('hide');
				setTimeout(function () {
					$('#modal-success').modal('show');
				},400);
			},2000);

			/*$(this).parents('form').submit();  ajax */
		}

	});


	/*form buy-in-1-click-tel*/
	$('.form-buy-in-1-click-tel [type=submit]').click(function (e) {
		e.preventDefault();
		if($('.form-buy-in-1-click .form-group').hasClass('has-error')){

		} else if($('.form-buy-in-1-click-tel [type=tel]').val() == ''){
			$('.form-buy-in-1-click-tel [type=tel]').parents('.form-group').removeClass('has-success').addClass('has-error');
			$('.form-buy-in-1-click-tel [type=tel]').parents('.form-group').find('.help-block').slideDown(300);
		} else{
			/*success*/
			$(this).append('<div class="load"><i class="fa fa-refresh fa-spin fa-2x" aria-hidden="true"></i></div>');

			setTimeout(function () {
				$('.form-buy-in-1-click-tel [type=submit] .load').remove();
				$('#modal-cart').modal('hide');
				setTimeout(function () {
					$('#modal-success').modal('show');
				},400);
			},2000);

			/*$(this).parents('form').submit();  ajax */
		}

	});

	/*form cheaper*/
	$('.form-cheaper [type=submit]').click(function (e) {
		e.preventDefault();
		console.log($('.form-cheaper [type=tel]').val());
		if($('.form-cheaper .form-group').hasClass('has-error')){
			console.log('has error');
		} else if($('.form-cheaper [type="text"]').val() == ''){
			$('.form-cheaper [type="text"]').parents('.form-group').removeClass('has-success').addClass('has-error');
			$('.form-cheaper [type="text"]').parents('.form-group').find('.help-block').slideDown(300);
		} else if($('.form-cheaper [type=tel]').val() == ''){
			$('.form-cheaper [type=tel]').parents('.form-group').removeClass('has-success').addClass('has-error');
			$('.form-cheaper [type=tel]').parents('.form-group').find('.help-block').slideDown(300);
			console.log('bad tel');
		} else{
			/*success*/
			$(this).append('<div class="load"><i class="fa fa-refresh fa-spin fa-2x" aria-hidden="true"></i></div>');

			setTimeout(function () {
				$('.form-cheaper [type=submit] .load').remove();
				$('#modal-cheaper').modal('hide');
				setTimeout(function () {
					$('#modal-success').modal('show');
				},400);
			},2000);

			console.log('dddddd');

			/*$(this).parents('form').submit();  ajax */
		}

	})

});