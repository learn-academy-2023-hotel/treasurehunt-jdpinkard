const RestartButton = ({ restartButtonPressed }) => {
    const buttonClick = () => {
      restartButtonPressed()
    }
  
    return (
      <>
        <p></p>
        <button className="restartButton" onClick={buttonClick}>
          Play Again
        </button>
      </>
    )
  }
  export default RestartButton