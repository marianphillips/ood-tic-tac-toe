const TicTacToe = require("../src/tictactoe.js")

// [["-","-","-"],
//  ["-","-","-"],
// ["-","-","-"]]

describe("TicTacToe", () => {
  let game

  beforeEach(() => {
    game = new TicTacToe()
  })

  
  it("new game creates board", () => {
    const expected = [["-","-","-"],
                     ["-","-","-"],
                     ["-","-","-"]]
    const test = game.board
    expect(test).toEqual(expected)
  })

  it("is player x - true", () => {
    const expected = true
    const test = game.playerIsX()
    expect(test).toEqual(expected)
  })

  it("is player o - false", () => {
    const expected = false
    const test = game.playerIsO()
    expect(test).toEqual(expected)
  })

  it("set player o - false", () => {
    const expected = "o"
    game.setPlayerO()
    const test = game.player
    expect(test).toEqual(expected)
  })

  it("check if win, row", () => {
    const expected = true
    game.board = [
    ["-","-","-"],
    ["x","x","x"],
    ["-","-","-"]]
    const test = game.checkIfWin()
    expect(test).toEqual(expected)
  })

  it("check if win, column", () => {
    const expected = true
    game.board = [
    ["-","x","-"],
    ["-","x","-"],
    ["-","x","-"]]
    const test = game.checkIfWin()
    expect(test).toEqual(expected)
  })

  it("check if win, diagonal", () => {
    const expected = true
    game.board = [
    ["x","-","-"],
    ["-","x","-"],
    ["-","-","x"]]
    const test = game.checkIfWin()
    expect(test).toEqual(expected)
  })

  it("check if win, false", () => {
    const expected = false
    game.board = [
    ["o","-","-"],
    ["-","x","-"],
    ["-","-","x"]]
    const test = game.checkIfWin()
    expect(test).toEqual(expected)
  })

  it("check if draw", () => {
    const expected = true
    game.board = [
    ["o","x","o"],
    ["o","x","o"],
    ["x","o","x"]]
    const test = game.checkIfDraw()
    expect(test).toEqual(expected)
  })

  it("check if draw, game not finished", () => {
    const expected = false
    game.board = [
    ["o","x","o"],
    ["o","x","-"],
    ["x","o","x"]]
    const test = game.checkIfDraw()
    expect(test).toEqual(expected)
  })

  it("take turn, board changed", () => {
    const expected = [
        ["-","-","-"],
        ["-","-","-"],
        ["-","-","x"]]
    game.takeTurn(2,2)
    const test = game.board
    expect(test).toEqual(expected)
  })

  it("take turn, player changes", () => {
    const expected = "o"
    game.takeTurn(2,2)
    const test = game.player
    expect(test).toEqual(expected)
  })


  it("take turn, space taken", () => {
    const expected = "This space has already been taken, take another turn"
    game.board = [
    ["-","x","-"],
    ["-","x","-"],
    ["-","o","-"]]
    const test = game.takeTurn(0,1)
    expect(test).toEqual(expected)
  })

  it("take turn, winner!", () => {
    const expected = `Player x wins!`
    game.board = [
    ["x","o","x"],
    ["o","x","o"],
    ["o","x","-"]]
    const test = game.takeTurn(2,2)
    expect(test).toEqual(expected)
  })

  it("take turn, draw!", () => {
    const expected = `Draw! Nobody wins!`
    game.board = [
    ["x","o","x"],
    ["o","x","o"],
    ["o","x","-"]]
    game.player = "o"
    const test = game.takeTurn(2,2)
    expect(test).toEqual(expected)
  })


})