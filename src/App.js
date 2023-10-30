import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import RestartButton from "./components/RestartButton"
import Counter from "./components/Counter"


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
  const [treasureLocation, setTresureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
  const [clickCounter, setClickCounter] = useState(5)
  const [gameEnd, setGameEnd] = useState(false)

  const handleSquareClick = (clickSquareIndex) => {
    if(!clickCounter === 0 || gameEnd !== true){
      let updatedBoard = [...board]
      // set condion for if treasure location is same as clicked square's index show a treasure
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
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Counter 
      clickCounter={clickCounter}
      />
      <div className="board">
        {board.map((value, index) => {
          console.log(value, index)
          return <Square 
          value={value} 
          index={index}
          handleSquareClick={handleSquareClick}
          />
        })}
      </div>
      <RestartButton 
      restartButtonPressed={restartButtonPressed}
      />
    </>
  )
}

export default App
