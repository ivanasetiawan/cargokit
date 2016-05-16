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
		$(this).parents('[data-custom-radio-row]').find('[data-custom-radio-parent]').removeClass('active');

		if ($(this).is(':checked')) {
			$(this).closest('[data-custom-radio-parent').addClass('active');
		}

	});

	// Add or remove items
	var regex = /^(.+?)(\d+)$/i;
	var cloneIndex = $('[data-cloned-input]').length;

	function clone(event){
		event.preventDefault();
		$(this).parents('[data-cloned-input]').clone()
			.appendTo('[data-add-items]')
			.attr('id', 'clonedItem' +  cloneIndex)
			.find('*')
			.each(function() {
				var id = this.id || '';
				var match = id.match(regex) || [];
				if (match.length == 3) {
					this.id = match[1] + (cloneIndex);
					console.log(this.id);
				}
				$(this).find('[data-item-id]').html(cloneIndex + 1);
			})
			.on('click', '[data-add-item]', clone)
			.on('click', '[data-remove-item]', remove);
		cloneIndex++;


	}
	function remove(){
		$(this).parents('[data-cloned-input]').remove();
	}
	$('[data-add-item]').on('click', clone);
	$('[data-remove-item]').on('click', remove);
});
