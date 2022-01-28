class TicTacToe {
    constructor(startingPlayer = "x") {
        this.player = startingPlayer
        this.board = [["-","-","-"],
                      ["-","-","-"],
                      ["-","-","-"]]
    }

playerIsX() {
    return this.player === "x"
}

playerIsO() {
    return this.player === "o"
}

setPlayerX() {
    this.player = "x"
}

setPlayerO() {
    this.player = "o"
}


checkIfWin() {
    //row
    for(let i = 0; i < this.board.length; i++) {
        let row = this.board[i]
        if(row.filter(a => a === this.player).length === 3){
            return true
        }
    }

    //column
    for(let i = 0; i < 3; i++) {
        if(this.board[0][i] === this.player && this.board[1][i] === this.player && this.board[2][i] === this.player){
            return true
        }
    }

    //diagonals
          if(this.board[0][0] === this.player && this.board[1][1] === this.player && this.board[2][2] === this.player){
                return true
          }

          if(this.board[0][2] === this.player && this.board[1][1] === this.player && this.board[2][0] === this.player){
            return true
      }

return false
}

checkIfDraw() {
    for(let i = 0; i < this.board.length; i++) {
        let row = this.board[i]
        for(let j = 0; j < row.length;j++) {
            if(row[j] === "-") {
                return false
            }
        }   
    }
    return true
}

takeTurn(row, col) {
    if(this.board[row][col] !== "-") {
        return "This space has already been taken, take another turn"
    }

    if(this.board[row][col] === "-") {
        this.board[row][col] = this.player
    }

    if(this.checkIfWin(this.player)) {
        return `Player ${this.player} wins!`
    }

    if(this.checkIfDraw(this.player)) {
        return `Draw! Nobody wins!`
    }

    if(this.playerIsX()) {
        this.setPlayerO()
    }
    else if(this.playerIsO()){
        this.setPlayerX()
    }

}


}

module.exports = TicTacToe

const game = new TicTacToe()

game.takeTurn(1,1)
console.log(game.board)
game.takeTurn(0,1)
console.log(game.board)
game.takeTurn(2,1)
console.log(game.board)
game.takeTurn(0,0)
console.log(game.board)