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

  const handleSquareClick = (clickSquareIndex) => {
  alert(clickSquareIndex)
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
