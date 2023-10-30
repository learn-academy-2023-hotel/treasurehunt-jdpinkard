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

  const handleSquareClick = (clickSquareIndex) => {
    let updatedBoard = [...board]
    // set condion for if treasure location is same as clicked square's index show a treasure
    if(clickSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickSquareIndex] = "👑"
    }  else if (clickSquareIndex === bombLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickSquareIndex] = "💣"
    } else {
      setClickCounter(clickCounter - 1)
      // use index to update the current square's value with emoji
      updatedBoard[clickSquareIndex] = "🌴"
      
    }
    setBoard(updatedBoard)
  }

  const restartButtonPressed = () => {
    setBoard(startingBoard)
    setClickCounter(5)
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
