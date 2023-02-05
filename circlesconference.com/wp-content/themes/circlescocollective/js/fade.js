(function($) { 

	function fadeScroll()
	{
		var wTop = $(document).scrollTop(), wBtm = wTop+window.innerHeight;
		$('.fade, .portfolio-gallery img').each(function(){
			var eTop = $(this).offset().top, eBtm = $(this).offset().top+$(this).innerHeight();
			if(eBtm > wTop && eTop < wBtm)  {
				$(this).removeClass('fadeOut').addClass('fadeIn');
			} else {
				$(this).removeClass('fadeIn').addClass('fadeOut');
			}
		});
	}

	$(window).on('load',fadeScroll);
	$(window).on('scroll',fadeScroll);


})(jQuery);