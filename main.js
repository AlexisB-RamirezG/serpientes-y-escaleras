import Player from "./player.js";
import Game from "./game.js";

let game = new Game(),
    player1 = new Player(1),
    player2 = new Player(2);

game.startGame(player1, player2);