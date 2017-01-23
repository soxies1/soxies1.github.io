
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
		if (imagePos < topOfWindow+630) {
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
		if (imagePos < topOfWindow+600) {
			$(this).addClass("slideUp");
		}
	});
});

$(".continue").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});


function hideOverlay(){
	$('#overlay').fadeOut(100);
	$('#playRaftIt').hide();
}

function showOverlay(panel){
	if(panel === games){
		$('#playRaftIt').show();
	}

	document.getElementById('carousel-img1').src = panel.images[0];
	document.getElementById('carousel-img2').src = panel.images[1];
	document.getElementById('carousel-img3').src = panel.images[2];
	document.getElementById('carousel-img4').src = panel.images[3];
	document.getElementById('dialog-description').innerHTML = panel.text;
	document.getElementById('dialog-title').innerHTML = panel.title;
	$('#overlay').fadeIn(100);
	$('html, body').animate({
        scrollTop: $("#overlay").offset().top
    }, 500);
}


