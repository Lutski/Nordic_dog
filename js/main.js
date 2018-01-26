$(document).ready(function() {
  smoothScroll(500);

  $(window).on("scroll", function() {
    var fromTop = $(this).scrollTop();
    console.log(fromTop);
    $('header .navigation').toggleClass("sticky", (fromTop > 200));
  });

});

function smoothScroll(duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top - 100
	        }, duration);
	    }
	});
}
