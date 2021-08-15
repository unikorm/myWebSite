"use strict"

        // list of variables...
        let gameOne = document.getElementById("first");
        let gameTwo = document.getElementById("second");
        let gameThree = document.getElementById("third");
        let gameFour = document.getElementById("fourth");
        let gameBackground = document.getElementById("gameBackground");
        let webSpace = document.getElementById("webSpace");





        // list of functions...
        function openGameSpace () {
                gameOne.onclick = function() {
                        gameBackground.style.visibility = "visible";
                };
                gameTwo.onclick = function() {
                        gameBackground.style.visibility = "visible";
                };
                gameThree.onclick = function() {
                        gameBackground.style.visibility = "visible";
                };
                gameFour.onclick = function() {
                        gameBackground.style.visibility = "visible";
                };
        };

        function closeGame() {
                document.addEventListener( "keydown", function( event ) {
                        if (event.key === "Escape") gameBackground.style.visibility = "hidden";
                } );
        };


        // calling the functions...
        openGameSpace();
        closeGame();


