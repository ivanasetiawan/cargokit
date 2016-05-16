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
	};

	// Custom radio input
	$('[data-custom-radio]').on('change', function() {
		$('[data-custom-radio]').closest('[data-custom-radio-parent]').removeClass('active');

		if ($(this).is(':checked')) {
			$(this).closest('[data-custom-radio-parent').addClass('active');
		}

	});
});
