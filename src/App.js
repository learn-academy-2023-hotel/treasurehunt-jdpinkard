import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"


const App = () => {
  const startingBoard = [
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ]

  const [board, setBoard] = useState(startingBoard)
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [clickCounter, setClickCounter] = useState(5)
  const [gameEnd, setGameEnd] = useState(false)

  let bombLocation = Math.floor(Math.random() * board.length)

  const handleSquareClick = (clickSquareIndex) => {
    do {
      bombLocation = Math.floor(Math.random() * startingBoard.length);
    } while (bombLocation === treasureLocation)
    if(clickCounter > 0 && !gameEnd && board[clickSquareIndex] === "?"){
      let updatedBoard = [...board]
      // set condition for if treasure location is same as clicked square's index show a treasure
      if(clickSquareIndex === treasureLocation) {
        // then reassign state value at that index to treasure emoji
        updatedBoard[clickSquareIndex] = "👑"
        setGameEnd(true)
        setTimeout(function() {
          alert("You found the treasure! You win!");
        }, 300);
      }  else if (clickSquareIndex === bombLocation) {
        // then reassign state value at that index to treasure emoji
        updatedBoard[clickSquareIndex] = "💣"
        setGameEnd(true)
        setTimeout(function() {
          alert("You found the bomb! You lose!");
        }, 300);
      } else {
        setClickCounter(clickCounter - 1)
        // use index to update the current square's value with emoji
        updatedBoard[clickSquareIndex] = "🌴"
        if (clickCounter === 1) {
          setTimeout(function() {
            alert("Ran out of searches! You lose!");
          }, 300);
        }
      }
      setBoard(updatedBoard)
   }
  }

  const restartButtonPressed = () => {
    setBoard(startingBoard)
    setClickCounter(5)
    setGameEnd(false)
    setTreasureLocation(Math.floor(Math.random() * board.length))
    do {
      bombLocation = Math.floor(Math.random() * startingBoard.length);
    } while (bombLocation === treasureLocation);
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="outerBox">
        <div className="board">
          {board.map((value, index) => {
            return <Square 
            value={value} 
            index={index}
            handleSquareClick={handleSquareClick}
            key={index}
            />
          })}
        </div>
        <div className="counter">Click Counter: {clickCounter}</div>
        <button className="restartButton" onClick={restartButtonPressed}>
          Play Again
        </button>
      </div>
    </>
  )
}

export default App
