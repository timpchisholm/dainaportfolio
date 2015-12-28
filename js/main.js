
$('.costume-description a').fluidbox();

// $( ".navhere" ).hover(
//   function() {
//     $( '.costumenav' ).slideDown();
//   }, function() {
//     $( '.costumenav' ).slideUp();
//   }
// );

$('li .navhere').mouseenter(function(){
	$('nav .costumenav').slideDown();
})