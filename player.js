import Dice from "./dice.js";

export default class Player {
    constructor(playerName, position = 0) {
        this._position = position;
        this._dice = new Dice();
        this._playerName = playerName;
    }

    get position() {
        return this._position;
    }

    get name() {
        return this._playerName;
    }

    move() {
        this._position += this._dice.roll();
    }

    moveBySpecialSquare(bonus) {
        this._position += bonus;
    }

    toString() {
        if (this._position >= 100) {
            return `Player ${this._playerName}'s position: 100`;
        } else {
            return `Player ${this._playerName}'s position: ${this._position}`;
        }
    }
}