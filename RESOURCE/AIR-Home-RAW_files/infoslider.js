jQuery(document).ready(function($) {
	$('.slider-container').hide();

	var initSlider = function() { 
		$('.slider-container').show();
		var unslider = $('.slider-container').unslider()

		$('.unslider-arrow').click(function() {
	        var fn = this.className.split(' ')[1];
	        
	        //  Either do unslider.data('unslider').next() or .prev() depending on the className
	        unslider.data('unslider')[fn]();
	    });
	};

	// From https://css-tricks.com/forums/topic/unslider-simple-jquery-slider-not-working/
	// get the image's src attribute
    var source = $('.slider-container ul li img').first().attr('src');
    // add the date as a query string to the image's src attribute, so that every time the page is refreshed, IE will reload it and fire the load event
    $('.slider-container ul li img').first().attr('src', source + '?' + new Date().getTime());
    // initilize the unslider plugin, but only after the first image loads
    $('.slider-container ul li img').first().load(function(){ initSlider(); });
});