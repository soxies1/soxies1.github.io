
    // function mouseOverTextGame() {
    //     addAnimationClass("textgame", "slideDown");
    // }

    // document.getElementById('textgameimage').addEventListener("mouseover", mouseOverTextGame);

    // function addAnimationClass(elemId, animationClass){
    // 	var elem = document.getElementById(elemId);
    //     if(!elem.classList.contains(animationClass)){
    //         elem.classList.add(animationClass);
    //     }
    // }

// Initialize slick    
$(document).ready(function(){
  $('.your-class').slick({
  	dots: true,
    infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
  });
});

$(window).scroll(function() {
	$('#textgame').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideDown");
		}
	});
});

$(window).scroll(function() {
	$('#hobbies').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideLeft");
		}
	});
});

$(window).scroll(function() {
	$('#websites').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideDown");
		}
	});
});

$(window).scroll(function() {
	$('#path').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideUp");
		}
	});
});

$(window).scroll(function() {
	$('#homeserver').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+550) {
			$(this).addClass("slideUp");
		}
	});
});

$(window).scroll(function() {
	$('#education').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+550) {
			$(this).addClass("slideUp");
		}
	});
});

function hideOverlay(){
	//$('#overlay').hide(100);
	$('#overlay').fadeOut(100);
}

function showOverlay(){
	//$('#overlay').show(100);
	$('#overlay').fadeIn(100);
}

