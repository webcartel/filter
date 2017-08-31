$(function(){
	/*accordion*/
	$('.accordion').each(function () {
		var $this = $(this);
		var $items = $this.find('> .item');
		var $titles = $items.find('> .title-accordion');
		var $contents = $items.find('> .content-accordion');

		$contents.hide();

		$titles.bind('click', function (e, now) {
			var $title = $(this);
			var $parent = $title.parent();
			var index = $titles.index($title);
			if (now !== 0) {
				now = 300;
			}

			if ($parent.hasClass('open')) {
				$contents.eq(index).hide(300);
				$parent.removeClass('open');
			} else {
				$titles.parent().removeClass('open');

				$titles.parents('.content-accordion').show().each(function(){
					var $this = $(this);
					$this.prev().addClass('open');
				});

				$contents.not($contents.eq(index)).hide(now).find('.open .title-accordion').trigger('click');
				$contents.eq(index).show(now);
				$parent.addClass('open');
			}
		});

	});
});