$('.costume-description a').fluidbox();
$('.thumb a').fluidbox();



$('#costume-drop').on('click', function() {
		if (window.innerWidth <= 1023){
			$('.costumesnav').slideToggle(100);
		}
});


$(document).ready(function(){

  // On click of the NEXT button
  $('.next').on('click', function(){
    if ( $('.shown').is(':last-child') ) {
      jQuery.noop();
    }
    else {
      $('.shown').removeClass('shown').next().addClass('shown');
      $('.costume-description a').fluidbox();
	  $('.thumb a').fluidbox();
    }
  });

  // On click of the BACK button
  $('.back').on('click', function(){

    if ( $('.shown').is(':first-child') ) {
		jQuery.noop();
    }
    else {
      $('.shown').removeClass('shown').prev().addClass('shown');
    }
  });
});

























