$(document).ready(function() {
    $(".sub-menu").hide();
    $("#main-menu li").on("mouseenter", function(e) {
        $elm = $(this);
        $elm.find(".sub-menu").stop().show().animate({
            opacity: 1
        }, 500, function() {
        
        }); 
    }).on("mouseleave", function(e) {
        $elm = $(this);
        $elm.find(".sub-menu").stop().animate({
            opacity: 0
        }, 200, function() {
            $(this).hide()
        }); 
    }).on("click", function(e) {
        if ($(this).children().length == 1) {
        }
    })

    var log = $("#log");
    function l(str, type) {
        //log.append("> "+str+"<br>");
    }

    var top = $(".top-txt");
    function fixTop() {
        var l = ($(window).width()-top.width())/2;
        top.css("left", l+"px"); 
    }
    fixTop();
    $(window).resize(function() {
        fixTop();
    });

});