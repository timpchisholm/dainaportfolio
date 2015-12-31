
$('.costume-description a').fluidbox();
$('.thumb a').fluidbox();

// $( ".navhere" ).hover(
//   function() {
//     $( '.costumenav' ).slideDown();
//   }, function() {
//     $( '.costumenav' ).slideUp();
//   }
// );

$('li .navhere').on('click', function(){
	$('.costumesnav').slideDown();
})

// $(document).ready(function(){
// 	$(".navhere").hover
// 		(function(){
// 			$('.costumesnav').css('display', 'block');
// 	},
// 		(function(){
// 			$('costumesnav').css('display', 'none');
// 		});

// });

