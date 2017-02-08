$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1
});
var i = 1;
$('.owl-carousel .owl-dot').each(function(){
  $(this).text('0' + i);
  i++;
});
}); 