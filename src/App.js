import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import Footer from "./components/Footer"
import CustomAlert from "./components/CustomAlert"
import chest from './images/chest100.png'
import bomb from './images/bomb100.png'
import skull from './images/skull100.png'
import tree from './images/palm100.png'


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
  const [alert, setAlert] = useState(null)
  let bombLocation = Math.floor(Math.random() * board.length)

  // GameBoard Processing Code for clicking updates and win/lose conditions
  const handleSquareClick = (clickSquareIndex) => {
    // updatedBoard stores/updates the board based on what you find 
    let updatedBoard = [...board]
    // If the gameEnded or the place where you are clicking is not a "?", it will not allow you to click the board
    if(gameEnd || board[clickSquareIndex] !== "?"){
      return
    }
    do { // Ensures bombLocation and treasureLocation are never the same
      bombLocation = Math.floor(Math.random() * startingBoard.length)
    } while (bombLocation === treasureLocation)
    // set condition for if treasure location is same as clicked square's index : show a treasure
    if(clickSquareIndex === treasureLocation) {
      // updates the clicked square with the treasure emoji
      updatedBoard[clickSquareIndex] = <img src={chest} alt="Chest" width={120}/>
      setGameEnd(true)
      setTimeout(function() {
        showAlert("You found the treasure!", 'You Win!', <img src={chest} alt="Chest" width={120}/>)
      }, 300)
      // updates board
      setBoard(updatedBoard)
      return
    }
    // set condition for if bomb location is same as clicked square's index : show a bomb
    if (clickSquareIndex === bombLocation) {
      // updates the clicked square with the bomb emoji
      updatedBoard[clickSquareIndex] = <img src={bomb} alt="Bomb" width={120}/>
      setGameEnd(true)
      setTimeout(function() {
        showAlert('You found the bomb!', 'You lose!', <img src={bomb} alt="Bomb" width={120}/>)
      }, 300)
      // updates board
      setBoard(updatedBoard)
      return
    }
    // set condition for if neither bomb or treasure location is same as clicked square's index : show a tree
    if (clickCounter === 1) {
      setClickCounter(clickCounter - 1)
      // updates the clicked square with the tree emoji
      updatedBoard[clickSquareIndex] = <img src={tree} alt="Tree" width={120}/>
      setGameEnd(true)
      setTimeout(function() {
        showAlert('Stranded without supplies!', 'You lose!', <img src={skull} alt="Skull" width={120}/>)
      }, 300)
      // updates board
      setBoard(updatedBoard)
      return
    }
    setClickCounter(clickCounter - 1)
    // updates the clicked square with the tree emoji
    updatedBoard[clickSquareIndex] = <img src={tree} alt="Tree" width={120}/>
    // updates board
    setBoard(updatedBoard)
  }

  // resets board to a default state
  const restartButtonPressed = () => {
    setBoard(startingBoard)
    setClickCounter(5)
    setGameEnd(false)
    setTreasureLocation(Math.floor(Math.random() * board.length))
    do {
      bombLocation = Math.floor(Math.random() * startingBoard.length)
    } while (bombLocation === treasureLocation)
  }

  // Calling Alert Function
  const showAlert = (message1, message2, message3) => {
    setAlert({ message1, message2, message3})
  }

  // Closing Alert Function
  const closeAlert = () => {
    setAlert(null)
    restartButtonPressed()
  }

  return (
    <>
      <div>
        {alert && (
          <CustomAlert
            message1={alert.message1}
            message2={alert.message2}
            message3={alert.message3}
            closeAlert={closeAlert}
          />
        )}
      </div>
      <div className="float-parent-element">
        <div className="float-child-element">
          <div className="outer-box">
            <div className="board">
              {board.map((value, index) => {
                return <Square 
                value={value} 
                index={index}
                handleSquareClick={handleSquareClick}
                key={index}
                gameEnd={gameEnd}
                />
              })}
            </div>
            <div className="click-counter-text">Voyage Supplies: <span className="click-counter-number">{clickCounter} Left</span></div>
              <button className="restart-button" onClick={restartButtonPressed}>Restart Voyage</button>
          </div>
        </div>
        <div>
          <div className="directions-box">
            <h1>Lost Treasure of Captain Pace</h1>
            <p>Arr, let me spin ye a yarn of legend and mystery on the high seas! The tale be told that Captain Pace, a scallywag of the finest order, did bury his <u>precious treasure on one of nine remote islands</u>. But, ye see, he be no fool. He rigged a devilish trap with a <u>bomb on one of those isles</u>, just awaitin' to blow any greedy soul to the depths of Davy Jones' locker!</p>
            <p>So, me hearties, beware and take heed! We've got but enough supplies to set <u>sail a mere five times</u> before we must turn our ship around and face the perils of the open sea once more.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
