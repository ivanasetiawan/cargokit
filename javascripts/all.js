$(document).ready(function(){$("[data-get-focus]").length&&$("[data-get-focus]").focus(function(){$(this).parent("div").addClass("focusing")}).blur(function(){$(this).parent("div").removeClass("focusing")})});