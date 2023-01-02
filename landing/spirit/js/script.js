document.getElementById('first').onmouseover = function() {
    document.getElementById('second').style.opacity = '0.5';
}
document.getElementById('first').onmouseout = function() {
    document.getElementById('second').style.opacity = '1';
}

/* slideshow */
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:3,
		speed:1000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});