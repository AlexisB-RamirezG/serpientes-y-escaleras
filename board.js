export default class Board {
    constructor() {
        this._squares = new Array(100).fill(0);
    }

    get squares() {
        return this._squares;
    }

    setBoard() {
        this._setSnakes();
        this._setStairs();
    }

    _setSnakes() {
        this._squares[19] = -5;
        this._squares[28] = -22;
        this._squares[33] = -18;
        this._squares[59] = -24;
        this._squares[64] = -23;
        this._squares[70] = -45;
        this._squares[78] = -24;
        this._squares[80] = -23;
        this._squares[89] = -4;
        this._squares[97] = -48;
    }

    _setStairs() {
        this._squares[1] = 19;
        this._squares[4] = 41;
        this._squares[20] = 10;
        this._squares[38] = 22;
        this._squares[40] = 45;
        this._squares[52] = 14;
        this._squares[68] = 16;
        this._squares[79] = 17;
    }
}