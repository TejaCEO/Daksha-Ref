
function writeEmail(contact, email, emailHost) {
  document.write("<a href=" + "&#109a&#105l" + "&#116&#111:" + email + "@" + emailHost+ "?Subject=Panhan%20Creative%20Agency%20Project%20Request&Body=How%20can%20Panhan%20Creative%20help%20you%3F>" + contact + "@" + emailHost+"</a>");
}

jQuery(document).ready(function ($) {
	
	$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
	});

	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 4000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});

	$( "#btnMenu" ).click(function() {
	  $( ".overlay-menu" ).slideToggle();
	});
	$( "#btnClose, .menu-links a" ).click(function() {
	  $( ".overlay-menu" ).slideToggle();
	});
	
/*
	 $('.gform_button').on('click',function()
	  {
	    $(this).val('Please wait ...').attr('disabled','disabled');
	    $(this).addClass('disabled');
	    $('form').submit();
	    $( ".overlay-loading" ).show();
	  });
*/

	/**
	*
	*     This code changes the background of the Menu button after it passes a div
	*
	*/
 
	// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
	var mainbottom = $('.bgBlue').offset().top + $('.bgBlue').height();
	
	// on scroll, 
	$(window).on('scroll',function(){
	
	    // we round here to reduce a little workload
	    stop = Math.round($(window).scrollTop());
	    if (stop > mainbottom) {
	        $('.header a.button').removeClass('outline white');
	        $('.header a.button').addClass('solid');
	        $('.header svg path').removeClass('white');
	        $('.header svg path').addClass('blue');
	    } else {
	        $('.header a.button').addClass('outline white');
	        $('.header svg path').addClass('white');
	        $('.header svg path').removeClass('blue');
	   }
	
	});  

  
});


$(window).on('load', function() {

	$('.split-image-height').equalize();
	$('.split-image-height-two').equalize();

});


/**
 *
 *     Make Divs same height
 *
 */


$.fn.equalize = function(){
    var maxHeight = 0;
    this.each(function(){
        var $this = $(this);
        if($this.height() > maxHeight){maxHeight = $this.height();}
    });

    return this.each(function(){
        $(this).height(maxHeight);
    });
};
