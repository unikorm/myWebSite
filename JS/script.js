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
                         $("#gameCentre").css( "visibility", "visible" );
                         gameCentre.hide();
        var gameIntro = $("#gameIntro");
                        $("#gameIntro").css( "visibility", "visible" )
                        gameIntro.hide();
        var playButton = $("#playButton");
                         $("#playButton").css( "visibility", "visible" )
                         playButton.hide();

        // on click on my logo open the main menu of game
        input.on("click", function(event) {
                openGame();
                openGameMenu();
                openPlayButton();
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
                        gameIntro.show(300);
                }, 700);
        };
        // open play button on menu
        function openPlayButton() {
                setTimeout( function() {
                        playButton.show(100);
                }, 1000);
        };

        // open playground on click "play"
        function openPlayGround(){
                // tu bude kod na otvorenie playground ked to spojim s myGame vetvou... tu mam zatial rozrobenu 
        };


        // on "esc" click close the game
        $(document).on("keyup", function(event) {
                if (event.which === 27) gameCentre.hide(200);
                                        gameIntro.hide(200);
                                        playButton.hide(200);
        });

});


