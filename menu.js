(function ($) {
    var menu = $(".mobile-menu");
    var button = $(".navi-btn")

    button.on("click", function(){
        menu.toggleClass("active")
    });

})(jQuery);
