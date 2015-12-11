var socialhover = function() {
	$('.fb').addClass('hide');
	$('.fb-hover').removeClass('hide');
}

var socialreturn = function() {
	$('.fb-hover').addClass('hide');
	$('.fb').removeClass('hide');
}

$('.fb').mouseenter(socialhover)

$('.fb-hover').mouseleave(socialreturn)





