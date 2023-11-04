const Square = ({ value, index, handleSquareClick, gameEnd }) => {

  const handleClick = () => {
    handleSquareClick(index)
  }
  
  /* Disables white color hover change on "?" when gameEnd = true */
  let hoverOffCheck = gameEnd ? '-off' : ''

  return (
    <> 
      {/* className={`square${hoverOffCheck}`} swaps back and forth between className square and square-off depending if game is over */}
      <div className={`square${hoverOffCheck}`} onClick={handleClick}>
        {value}
      </div>
    </>
  )
}
export default Square