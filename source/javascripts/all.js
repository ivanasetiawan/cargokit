// This is where it all goes :)
$(document).ready(function () {
	var isCustomSelect = '[data-custom-select]';
    $(isCustomSelect).change(function () {
        var str = "";
        str = $(this).find(":selected").text();
        $(this).next(".out").text(str);
    }).trigger('change');
})