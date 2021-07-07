 /* $(function() {
    $("img").hide(2000)
            .show(2000)
            .hide(2000)
            .show(2000);
}); */

$(function() {
        var input = $("#clickToGame");
        var screen = $("body");
        var gameCentre = $("<div/>", { id: "gameCentre"});
                gameCentre.appendTo("body").hide();
        input.on("click", function() {
                screen.animate({
                        opacity: ".5",
                        width: "99%",
                        height: "95%"
                }, 500 );
                gameCentre.show(600);
                event.preventDefault();
        });

        $(document).on("keyup", function(event) {
                if (event.which === 27) gameCentre.hide();
                                        screen.animate({ opacity: 1, width: "98%", height: "96%" }, 100);
        })

});


