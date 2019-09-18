import Board from "./board.js";

export default class Game {
    constructor() {
        this._gameFinished = false;
        this._winner = 0;
        this._board = new Board();
    }

    get winner() {
        return this._winner;
    }

    startGame(player1, player2) {
        this._board.setBoard();
        do {
            player1.move();
            console.log(player1.toString());
            this._checkSpecial(player1);
            player2.move();
            console.log(player2.toString());
            this._checkSpecial(player2);
        } while (this._checkStatus(player1, player2) === false);

        console.log(this._getWinnerAsString());
    }

    _checkSpecial(player) {
        let squareValue = this._board.squares[player.position - 1];
        if (squareValue > 0) {
            console.log(`Player ${player.name} is in a stair square: +${squareValue}`);
            this._playerInSpecialSquare(player, squareValue);
        } else if (squareValue < 0) {
            console.log(`Player ${player.name} is in a snake square: ${squareValue}`);
            this._playerInSpecialSquare(player, squareValue);
        }
    }

    _playerInSpecialSquare(player, value) {
        player.moveBySpecialSquare(value);
        console.log(player.toString());
    }

    _checkStatus(player1, player2) {
        if(player1.position >= 100) {
            this._gameFinished = true;
            this._winner = `Player ${player1.name}`
            return this._gameFinished;
        } else if (player2.position >= 100) {
            this._gameFinished = true;
            this._winner = `Player ${player2.name}`;
            return this._gameFinished;
        } else {
            return this._gameFinished;
        }
    }

    _getWinnerAsString() {
        return `${this._winner} won`;
    }
}