/* 

Object-fit swapper
Author - Tristan Dwyer / @tdwyerdesign

- Check if the browser supports the object-fit property. If not - hide the image and set the background image property instead for finer control
- Swap ".my-item" with the item you want to be fitted - this should be the item containing your image
- Current css is structured for scss/sass indentation

*/

(function($) {
	if (!Modernizr['object-fit']) {
		console.log("object-fit not supported");
		
		$('.my-item').each(function () {
			var $wrapper = $(this),
			imgUrl = $wrapper.find('img').prop('src');
			//console.log("defining imgURL var");
			if (imgUrl) {
				$wrapper
				.css('backgroundImage', 'url(' + imgUrl + ')')
				.addClass('compat-object-fit')
				.children('img').hide();
			}  
		});
	}
})(jQuery);