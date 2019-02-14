//scroller caller
//jQuery(document).ready(function ($) {
//    console.info(get_query_arg(window.location.href, 'disable_scrollbar'))
//    if (get_query_arg(window.location.href, 'disable_scrollbar') !== 'on') {
//        window.dzsscr_init($('.mwrap-wrapper'), {
//            'type': 'scrollTop'
//            , 'settings_skin': 'skin_apple'
//            , enable_easing: 'on'
//            , settings_autoresizescrollbar: 'of'
//            , settings_chrome_multiplier: 0.03
//        })
//    }


//});


//header scroll
$(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('#global-nav').addClass('scrolled-nav');
            $('#global-nav.scrolled-nav').css('display', 'block');
        } else if (scrollTop < 100) {
            $('#global-nav').removeClass('scrolled-nav');
        }

    });

});


function get_query_arg(purl, key) {
    //        console.log(purl, key)
    if (purl.indexOf(key + '=') > -1) {
        //faconsole.log('testtt');
        var regexS = "[?&]" + key + "=.+";
        var regex = new RegExp(regexS);
        var regtest = regex.exec(purl);


        if (regtest != null) {
            var splitterS = regtest[0];
            if (splitterS.indexOf('&') > -1) {
                var aux = splitterS.split('&');
                splitterS = aux[1];
            }
            var splitter = splitterS.split('=');

            return splitter[1];

        }
        //$('.zoombox').eq
    }
}


//video parallax

$(document).ready(function () {
    $('#my-video').backgroundVideo({
        $videoWrap: $('#video-wrap'),
        parallaxOptions: {
            effect: 4.0
        },
        pauseVideoOnViewLoss: true
    });
    $('[data-toggle="modal"]').click(function () {
        $('html').addClass("modal-active");
    });
    $('[data-dismiss="modal"]').click(function () {
        $('html').removeClass("modal-active");
    });
});


//$(document).ready(function () {
//    var string0 = "Never stop exploring ";
//    for (var n = 0; n < string0.length; n++) {
//        $(".content-overlay").append("<span id='a" + n + "'>" + (string0[n] == " " ? "&nbsp;" : string0[n]) + "</span>");
//        $("#a" + n + "").delay(n * 50).queue(function (next) {
//            $(this).css({ "top": "10px", "opacity": "1" });
//            next();
//        });
//    };
//});


$(window).on("load", function () {
    $(".scroller-body").mCustomScrollbar({
        axis: "y",
        theme: "dark"
    });
});