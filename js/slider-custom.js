jQuery(document).ready(function ($) {

    $(".fancybox").fancybox({
        openEffect	: 'elastic',
        closeEffect	: 'elastic',
        helpers : {
            title : {
                type : 'over'
            }
        }
    });


    var  _CaptionTransitions = [{$Duration:900,x:0.6,$Easing:{$Left:$JssorEasing$.$EaseInOutSine},$Opacity:2}];

    var options1 = {
        $AutoPlay: true,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $ChanceToShow: 2
        },
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlider$,
            $CaptionTransitions: _CaptionTransitions,
            $PlayInMode: 1,
            $PlayOutMode: 3
        }
    };

    var options2 = {
        $AutoPlay: true,
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $ChanceToShow: 2
        }

    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options1);
    var jssor_slider2 =  new $JssorSlider$('testimonial_slider_container', options2);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales
    //while window resizing
    function ScaleSlider() {
        var parentWidth = $('#slider1_container').parent().width();
        if (parentWidth) {
            jssor_slider1.$ScaleWidth(parentWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }

    function ScaleSlider2() {
        var parentWidth = $('#testimonial_slider_container').parent().width();
        if (parentWidth) {
            jssor_slider2.$ScaleWidth(parentWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }
    //Scale slider after document ready
    ScaleSlider();
    ScaleSlider2();

    //Scale slider while window load/resize/orientationchange.
    $(window).bind("load", ScaleSlider);
    $(window).bind("load", ScaleSlider2);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("resize", ScaleSlider2);
    $(window).bind("orientationchange", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider2);
    //responsive code end
});