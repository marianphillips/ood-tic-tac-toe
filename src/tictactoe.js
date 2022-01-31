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

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('New game of TicTacToe? press any key to continue \n', () => {
    let game = new TicTacToe()
    console.log(game.board.join('\n')+`\n`)

rl.setPrompt('To take your turn, type in the row and column of where you want to go, sepearted by a comma. Or to exit type "close":')
rl.prompt();

rl.on('line', (answer) => {
    if(answer.trim() === "close") {
        rl.close()
    }
    else {
        let array = answer.trim().split(",")
        let blank = []
        for (let num of array) {
            blank.push(Number(num))
        }
        console.log(game.takeTurn(blank[0], blank[1]))
       console.log(game.board.join('\n')+`\n`)

       rl.setPrompt('To take your turn, type in the row and column of where you want to go, sepearted by a comma. Or to exit type "close":')
       rl.prompt();
    }

})
rl.on('close',()=> {
    console.log('Thank you for playing tic tac toe. ')
})
})

