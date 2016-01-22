$('.costume-description a').fluidbox();
$('.thumb a').fluidbox();


	//Allow the Costume Navigation to act as a dropdown
	//only when the window is less than 1024px
$('#costume-drop').on('click', function() {
		if (window.innerWidth <= 1400){
			$('.costumesnav').slideToggle(100);
		}
});



$(document).ready(function(){

	//On page load, if window is equal to or greater than 640px
	//then there should be a fourth image added to the fairy
	//carousel
	if (window.innerWidth >=640) {
	      $('.fairy-shown').next().addClass('fairy-shown')
	    };
	
	//Fairy carousel window resize rules    
	$(window).resize(function(){
		var fairyItems = $('.fairy-shown').length
			
		if (window.innerWidth <640) {
			if (fairyItems === 4) {
				if ($('.fairy-shown:last-child')){
					$('.fairy-shown:last-child').removeClass('fairy-shown');
				};
				if ($('.fairy-shown:nth-child(1)')){
					$('.fairy-shown:nth-child(4)').removeClass('fairy-shown');
				};	
			};
		};
		
	});	
	
	$(window).resize(function(){	
		var fairyItems = $('.fairy-shown').length
		
		if (window.innerWidth >639) {
				if (fairyItems === 3) {
					if ( $('.fairy-shown').is(':nth-child(3)') ) {
						$('.fairy-shown').next().addClass('fairy-shown');					
					};
				};	
		};
	});
		


	//Fairy Carousel 
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

  //Fairy Carousel
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

	//Mechanicals Carousel  
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

  //Mechanicals Carousel
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
  
  	//Court Carousel
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

  //Court Carousel
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

























