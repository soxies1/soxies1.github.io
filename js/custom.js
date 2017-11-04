$(document).ready(function() {
    $('.footer-item').each(function(index) {

        $(this).data('index', index);
        $(this).data('current-class', $(this)[0].classList[1]);

        $(this).click(function() {

            var selected_index = $(this).data('index');

            $(this).removeClass($(this).data('current-class')).addClass('dist-0')

            $(this).data('current-class', 'dist-0');

            $(this).siblings().each(function() {

                var index = $(this).data('index');

                if (selected_index != index) {

                    var newClass = 'dist-'+Math.abs(selected_index - index)
                    $(this).removeClass($(this).data('current-class')).addClass(newClass)

                    $(this).data('current-class', newClass);

                }
            });

            // Move arrow above selected item
            var $this = $(this);
            var offset = $this.offset();
            var width = $this.width();
            var height = $this.height();
            
            var centerX = offset.left + width / 2;
            $('.arrow-up').animate({
                left: centerX
            }, 500);

        });
    });

});

var selectedSection = ".c-about";

function showSection(toShow){
    if(toShow != selectedSection){
        $(selectedSection).hide()
        $(toShow).show(500)
        selectedSection = toShow
    }
}


$(window).scroll(function() {
    $('#textgame').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("slideDown");
        }
    });
});

$(window).scroll(function() {
    $('#hobbies').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 630) {
            $(this).addClass("slideLeft");
        }
    });
});

$(window).scroll(function() {
    $('#websites').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("slideDown");
        }
    });
});

$(window).scroll(function() {
    $('#hackathons').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("slideUp");
        }
    });
});

$(window).scroll(function() {
    $('#homeserver').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 550) {
            $(this).addClass("slideUp");
        }
    });
});

$(window).scroll(function() {
    $('#education').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("slideUp");
        }
    });
});

$(".continue").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});


function hideOverlay() {
    $('#overlay').fadeOut(100);
    deselectHeader();
}

function loadGameContent() {
    var section = "#header-games";
    selectHeader(section);

    $("#aboutpanel").hide().load('includes/games.html').fadeIn('500');
}

function loadWebsiteContent() {
    var section = "#header-websites";
    selectHeader(section);

    $("#aboutpanel").hide().load('includes/websites.html').fadeIn('500');
}

function loadHackathonContent() {
    var section = "#header-hackathons";
    selectHeader(section);

    $("#aboutpanel").hide().load('includes/hackathons.html').fadeIn('500');
}

function loadServerContent() {
    var section = "#header-servers";
    selectHeader(section);

    $("#aboutpanel").hide().load('includes/server.html').fadeIn('500');
}

function loadEducationContent() {
    var section = "#header-education";
    selectHeader(section);

    $("#aboutpanel").hide().load('includes/education.html').fadeIn('500');
}

function loadHobbiesContent() {
    document.getElementById('dialog-title').innerHTML = "Hobbies";
    $("#overlay-content").hide().load('includes/hobbies.html').fadeIn('500');
    $('#overlay').fadeIn(100);
    $('html, body').animate({
        scrollTop: $("#overlay").offset().top
    }, 500);
}

function returntomain(callback) {
    $("#aboutpanel").hide().load('includes/main.html').fadeIn('500', callback);

    deselectHeader();
}


var selectedCategory;

function selectHeader(headervar) {
    deselectHeader();
    $(headervar).animate({
        borderWidth: 2
    }, 200);

    selectedCategory = headervar;
}

function deselectHeader() {
    $(selectedCategory).animate({
        borderWidth: 0
    }, 200);

    selectedCategory = null;
}

$(document).ready(returntomain());