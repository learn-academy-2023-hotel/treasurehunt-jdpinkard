import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTresureLocation] = useState(Math.floor(Math.random() * board.length))
  // console.log(treasureLocation)
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

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
      // use index to update the current square's value with emoji
      updatedBoard[clickSquareIndex] = "🌴"
    }
    setBoard(updatedBoard)
  }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
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
    </>
  )
}

export default App
