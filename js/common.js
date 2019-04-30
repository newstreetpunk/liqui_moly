$(function() {

	$('.promo-slider').slick({
		speed: 300,
		autoplay: true,
  		autoplaySpeed: 2000,
  		responsive:[
  		{
  			breakpoint: 768,
  			settings: {
  				arrows: false
  			}
  		}]
	});

	$('.promo-slider--man').slick({
		speed: 300,
		autoplay: true,
  		autoplaySpeed: 2000,
  		responsive:[
  		{
  			breakpoint: 768,
  			settings: {
  				arrows: false
  			}
  		}]
	});

});
