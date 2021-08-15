'use strict';
 
        // list of variables...
        let gameOne = document.getElementById("first");
        let gameTwo = document.getElementById("second");
        let newDiv = document.createElement("div");
                     newDiv.setAttribute("id", "gameBackground");
        let webSpace = document.getElementById("webSpace");





        // list of functions...
        function openGameSpace () {
                gameOne.onclick = function() {
                        webSpace.appendChild(newDiv);
                };
        };

        openGameSpace();


