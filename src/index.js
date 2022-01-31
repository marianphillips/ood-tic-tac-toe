// const TicTacToe = require("./tictactoe.js")

class TicTacToe {
    constructor(startingPlayer = "x") {
        this.player = startingPlayer
        this.board = [["-","-","-"],
                      ["-","-","-"],
                      ["-","-","-"]]
        this.winningCombonation = ""                    
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
            this.winningCombonation = `row${i}`  
            return true
        }
    }

    //column
    for(let i = 0; i < 3; i++) {
        if(this.board[0][i] === this.player && this.board[1][i] === this.player && this.board[2][i] === this.player){
            this.winningCombonation = `col${i}` 
            return true
        }
    }

    //diagonals
          if(this.board[0][0] === this.player && this.board[1][1] === this.player && this.board[2][2] === this.player){
            this.winningCombonation = `dig1` 
                return true
          }

          if(this.board[0][2] === this.player && this.board[1][1] === this.player && this.board[2][0] === this.player){
            this.winningCombonation = `dig2` 
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


const game = new TicTacToe()

window.onload = function(){ 

const userMessage = document.getElementById("user-message");

const boxOne = document.getElementById("row0col0");
const boxTwo = document.getElementById("row0col1");
const boxThree = document.getElementById("row0col2");
const boxFour = document.getElementById("row1col0");
const boxFive = document.getElementById("row1col1");
const boxSix = document.getElementById("row1col2");
const boxSeven = document.getElementById("row2col0");
const boxEight = document.getElementById("row2col1");
const boxNine = document.getElementById("row2col2");


function boxLogic(row,col,box) {
    if(game.board[row][col] !== "-") {
        userMessage.innerHTML = "Choose another box"
    }
    else {
        userMessage.innerHTML = " "

        if(game.player === "x") {
        box.innerHTML = "X";
        }       
        if(game.player === "o") {
        box.innerHTML = "O";
        } 
        game.takeTurn(row,col)
        if(game.checkIfDraw()) {
            userMessage.innerHTML = `Draw! Nobody wins!`
            endGame()
            }
        if(game.checkIfWin()) {
        userMessage.innerHTML = `Player ${game.player} wins`
        endGame()
        allWinningCombos()
        }

}

}

function changeColorWin(combo, firstBox, secondBox, thirdBox) {
    if(game.winningCombonation === combo) {
        firstBox.style.color = "grey"
        secondBox.style.color = "grey" 
        thirdBox.style.color = "grey" 
    }
}

function allWinningCombos() {
    changeColorWin("row0", boxOne, boxTwo, boxThree)
    changeColorWin("row1", boxFour, boxFive, boxSix)
    changeColorWin("row2", boxSeven, boxEight, boxNine)
    changeColorWin("col0", boxOne, boxFour, boxSeven)
    changeColorWin("col1", boxTwo, boxFive, boxEight)
    changeColorWin("col2", boxThree, boxSix, boxNine)
    changeColorWin("dig1", boxOne, boxFive, boxNine)
    changeColorWin("dig2", boxThree, boxFive, boxSeven)
    
}

function endGame() {
    boxOne.onclick = null
    boxTwo.onclick = null
    boxThree.onclick = null
    boxFour.onclick = null
    boxFive.onclick = null
    boxSix.onclick = null
    boxSeven.onclick = null
    boxEight.onclick = null
    boxNine.onclick = null
    
    const newGame = document.getElementById("new-game");
    newGame.innerHTML = "New Game?"

    const refreshPage = () => {
        location.reload();
      }
      
    newGame.addEventListener('click', refreshPage)
}


boxOne.onclick = function(){
    boxLogic(0,0,boxOne)
};


boxTwo.onclick = function(){
    boxLogic(0,1,boxTwo)
};


boxThree.onclick = function(){
    boxLogic(0,2,boxThree)
};


boxFour.onclick = function(){
    boxLogic(1,0,boxFour)
};



boxFive.onclick = function(){
    boxLogic(1,1,boxFive)
};


boxSix.onclick = function(){
    boxLogic(1,2,boxSix)
};


boxSeven.onclick = function(){
    boxLogic(2,0,boxSeven)
};


boxEight.onclick = function(){
    boxLogic(2,1,boxEight)
};


boxNine.onclick = function(){
    boxLogic(2,2,boxNine)
};

};


