(function($) {

	/* 
	Check if the browser supports the object-fit property
	if not - hide the image and set the background image property instead for finer control
	*/
	if (!Modernizr['object-fit']) {
		console.log("object-fit not supported");
		$('.section-slideshow .slide').each(function () {
			var $wrapper = $(this),
			imgUrl = $wrapper.find('img').prop('src');
			console.log("defining imgURL var");
			if (imgUrl) {
				$wrapper
				.css('backgroundImage', 'url(' + imgUrl + ')')
				.addClass('compat-object-fit')
				.children('img').hide();
			}  
		});
		//carousel-image-gallery
		$('.carousel-image-gallery .slide').each(function () {
			var $wrapper = $(this),
			imgUrl = $wrapper.find('img').prop('src');
			console.log("defining imgURL var");
			if (imgUrl) {
				$wrapper
				.css('backgroundImage', 'url(' + imgUrl + ')')
				.addClass('compat-object-fit')
				.children('img').hide();
			}  
		});
		
		$('.field__media').each(function () {
			var $wrapper = $(this),
			imgUrl = $wrapper.find('img').prop('src');
			if (imgUrl) {
				$wrapper
				.css('backgroundImage', 'url(' + imgUrl + ')')
				.addClass('compat-object-fit')
				.children('img').hide();
			}  
		});
	}


})(jQuery);