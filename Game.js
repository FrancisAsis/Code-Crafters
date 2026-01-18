        let currentPos = 0; // Player current position
        let monsterTile = 7; // Monster position)

        // function to start the game
       function startGame() {
            document.getElementById("welcome-screen").classList.add("hidden");
            document.getElementById("game-screen").classList.remove("hidden");
            resetGame();
        }

        function Bridge() {
            const container = document.getElementById("bridge-visual");
            container.innerHTML = ""; 

            for (let Box = 1; Box <= 10; Box++) {
                const tile = document.createElement("div");
                tile.className = "tile";

                if (Box === currentPos) {
                    if (Box === monsterTile) {
                        tile.classList.add("monster-tile");
                        tile.innerText = "´ཀ`";
                    } else {
                        tile.classList.add("player-tile");
                        tile.innerText = "🏃🏻‍♀️‍➡️";
                    }
                }
                container.appendChild(tile);
            }
        }
    
        // To Move the player
        function move(steps) {
            currentPos = currentPos + steps;
            checkGame();

        document.getElementById("msg").innerText = "You moved " + steps + " step" + (steps   > 1 ? "s" : "") + "!";
        checkGame();

        }

        function rollDice() {
            if (Math.random() < 0.5 ) {
                document.getElementById("msg").innerText = "DICE TRAP!";
                currentPos = monsterTile; 
                checkGame();
            } else {
                let roll = Math.random() < 0.8 ? 4 : 6;
                currentPos = currentPos + roll;
                document.getElementById("msg").innerText = "LUCKY! Jumped " + roll;
                checkGame();
            }
        }

        function checkGame() {
            document.getElementById("pos").innerText = currentPos;
            Bridge();
 
            if (currentPos === monsterTile) {
                document.getElementById("msg").innerText = "GAME OVER!";
                document.getElementById("msg").style.color = "#ff4d4d";
                disableMovement(true);
            } 
            else if (currentPos >= 10) {
                document.getElementById("msg").innerText = "YOU SURVIVED!";
                document.getElementById("msg").style.color = "#4CAF50";
                disableMovement(true);
            }
        }

        function disableMovement(Disabler) {
            document.getElementById("btn1").disabled = Disabler;
            document.getElementById("btn2").disabled = Disabler;
            document.getElementById("btn3").disabled = Disabler;
        }

        function resetGame() {
            currentPos = 0;
            // Randomize monster again
            monsterTile = Math.floor(Math.random() * 3) + 7; // Random position between 7 and 9
            
            document.getElementById("msg").innerText = "Be careful (Always remember the rules) ";
            document.getElementById("msg").style.color = "white";
            document.getElementById("pos").innerText = "0";
            
            // Re-enable movement
            disableMovement(false);
            Bridge();
        }