// This is where it all goes :)
$(document).ready(function () {

	// Focus on parent div
	if ($('[data-get-focus]').length) {
		$('[data-get-focus]').focus(
		    function(){
		        $(this).parent('div').addClass('focusing');
		    }).blur(
		    function(){
		        $(this).parent('div').removeClass('focusing');
		    });
	}
})