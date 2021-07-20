 /* $(function() {
    $("img").hide(2000)
            .show(2000)
            .hide(2000)
            .show(2000);
}); */

$(function() {
        var input = $("#clickToGame");
        var gameCentre = $("#gameCentre");
                         gameCentre.hide();
        var gameIntro = $("#gameIntro");
                         gameIntro.hide();

        input.on("click", function(event) {
                openGame();
                openGameMenu();
                event.preventDefault();
        });

        function openGame(){
                gameCentre.show(700);
        };

        function openGameMenu(){
                setTimeout( function() {
                        gameIntro.show(400);
                }, 700);
        }


        $(document).on("keyup", function(event) {
                if (event.which === 27) gameCentre.hide(700);
                                        gameIntro.hide(100);
        })

});


