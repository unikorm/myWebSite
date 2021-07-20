 /* $(function() {
    $("img").hide(2000)
            .show(2000)
            .hide(2000)
            .show(2000);
}); */

$(function() {
        //main variables
        var input = $("#clickToGame");
        var gameCentre = $("#gameCentre");
                         gameCentre.hide();
        var gameIntro = $("#gameIntro");
                         gameIntro.hide();
        var playButton = $("#playButton");

        // on click on my logo open the main menu of game
        input.on("click", function(event) {
                openGame();
                openGameMenu();
                event.preventDefault();
        });

        // on click on play button open playground
        playButton.on("click", function() {
                openPlayGround();
        });

        // open background of game
        function openGame(){
                gameCentre.show(600);
        };
        // open menu of game
        function openGameMenu(){
                setTimeout( function() {
                        gameIntro.show(10);
                }, 700);
        };

        // open playground on click "play"
        function openPlayGround(){
                // tu bude kod na otvorenie playground ked to spojim s myGame vetvou... tu mam zatial rozrobenu 
        };


        // on "esc" click close the game
        $(document).on("keyup", function(event) {
                if (event.which === 27) gameCentre.hide(700);
                if (event.which === 27) gameIntro.hide(100);
        });

});


