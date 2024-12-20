(function($){
    $(function(){
        // scroll to sections
        $(".jq--scroll-nase-pizza").click(function(){
            $("html, body").animate({scrollTop: $(".jq--nase-pizza").offset().top}, 1000);
        });

        $(".jq--scroll-o-nasi-pizze").click(function(){
            $("html, body").animate({scrollTop: $(".jq--o-nasi-pizze").offset().top}, 1000);
        });

        $(".jq--scroll-reference").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1000);
        });

        $(".jq--scroll-fotogalerie").click(function(){
            $("html, body").animate({scrollTop: $(".jq--fotogalerie").offset().top}, 1000);
        });

        $(".jq--scroll-kontakt").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 1000);
        });

        // scroll buttons to sections
        $(".jq--scroll-prvni-tlacitko").click(function(){
            $("html, body").animate({scrollTop: $(".jq--nase-pizza").offset().top}, 1000);
        });

        $(".jq--scroll-druhe-tlacitko").click(function(){
            $("html, body").animate({scrollTop: $(".jq--reference").offset().top}, 1000);
        });

        // mobile navigation
        $(".jq--nav-icon").click(function(){

            $(".nav-background").fadeToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();

        });

        $(".jq--image-hamburger").click(function() {

        if($(".jq--image-hamburger").attr("src") == "images/menu_white.png")
        {
                $($(".jq--image-hamburger").attr("src", "images/cross_icon.png"));
        }
        else
        {
            $($(".jq--image-hamburger").attr("src", "images/menu_white.png"));
        }
        });
    });
})(jQuery);