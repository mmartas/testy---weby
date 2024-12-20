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

    });
})(jQuery);