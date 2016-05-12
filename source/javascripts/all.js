// This is where it all goes :)
$(document).ready(function () {

	// Focus on parent div
	if ($('[data-get-focus]').length) {
		$('[data-get-focus]').focus(
		    function(){
		        $(this).parents('[data-get-focus-parent]').addClass('focusing');
		    }).blur(
		    function(){
		        $(this).parents('[data-get-focus-parent]').removeClass('focusing');
		    });
	}
})