$('.costume-description a').fluidbox();
$('.thumb a').fluidbox();



$('#costume-drop').on('click', function() {
		if (window.innerWidth <= 1023){
			$('.costumesnav').slideToggle(100);
		}
});



$(document).ready(function(){

	if (window.innerWidth >=640) {
	      $('.fairy-shown').next().addClass('fairy-shown')
	    };
	    
	$(window).resize(function(){
		var fairyItems = $('.fairy-shown').length
			
		if (window.innerWidth <640) {
			if (fairyItems === 4) {
				$('.fairy-shown:last-child').removeClass('fairy-shown');
			};
		};
	});	
		



  // On click of the NEXT button
  $('.fairy-next').on('click', function(){
    if ( $('.fairy-shown').is(':last-child') ) {
      jQuery.noop();
    }
    else {
      $('.fairy-shown')
      	.removeClass('fairy-shown')
      	.next().addClass('fairy-shown');
      $('.costume-description a').fluidbox();
	  $('.thumb a').fluidbox();
    }
  });

  // On click of the BACK button
  $('.fairy-back').on('click', function(){

    if ( $('.fairy-shown').is(':first-child') ) {
		jQuery.noop();
    }
    else {
      $('.fairy-shown')
      	.removeClass('fairy-shown')
      	.prev().addClass('fairy-shown');
    }
  });
  
    // On click of the NEXT button
  $('.mechanicals-next').on('click', function(){
    if ( $('.mechanicals-shown').is(':last-child') ) {
      jQuery.noop();
    }
    else {
      $('.mechanicals-shown')
      	.removeClass('mechanicals-shown')
      	.next().addClass('mechanicals-shown');
      $('.costume-description a').fluidbox();
	  $('.thumb a').fluidbox();
    }
  });

  // On click of the BACK button
  $('.mechanicals-back').on('click', function(){

    if ( $('.mechanicals-shown').is(':first-child') ) {
		jQuery.noop();
    }
    else {
      $('.mechanicals-shown')
      	.removeClass('mechanicals-shown')
      	.prev().addClass('mechanicals-shown');
    }
  });
  
     // On click of the NEXT button
  $('.court-next').on('click', function(){
    if ( $('.court-shown').is(':last-child') ) {
      jQuery.noop();
    }
    else {
      $('.court-shown')
      	.removeClass('court-shown')
      	.next().addClass('court-shown');
      $('.costume-description a').fluidbox();
	  $('.thumb a').fluidbox();
    }
  });

  // On click of the BACK button
  $('.court-back').on('click', function(){

    if ( $('.court-shown').is(':first-child') ) {
		jQuery.noop();
    }
    else {
      $('.court-shown')
      	.removeClass('court-shown')
      	.prev().addClass('court-shown');
    }
  });
});

























