$(function() {

	$('.promo-slider').slick({
		speed: 300,
		autoplay: true,
  		autoplaySpeed: 2000,
  		nextArrow: '<img src="../img/svg/right-arrow.svg" alt="" class="promo-slider--next">',
  		prevArrow: '<img src="../img/svg/right-arrow.svg" alt="" class="promo-slider--prev">',
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
  		nextArrow: '<img src="../img/svg/right-arrow.svg" alt="" class="promo-slider--next">',
  		prevArrow: '<img src="../img/svg/right-arrow.svg" alt="" class="promo-slider--prev">',
  		responsive:[
  		{
  			breakpoint: 768,
  			settings: {
  				arrows: false
  			}
  		}]
	});

});
