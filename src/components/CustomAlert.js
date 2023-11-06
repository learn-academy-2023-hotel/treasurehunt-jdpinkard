const CustomAlert = ({ message1, message2, message3, closeAlert }) => {

  return (
    <div className="custom-alert-container">
      <div className="custom-alert-contents">
        {/* first line of the alert message */}
        <p className="custom-alert-text">{message1}</p>
        {/* second line of the alert message */}
        <h1 className="custom-alert-text">{message2}</h1>
        {/* icon for the alert message */}
        <p className="custom-alert-icon">{message3}</p>
        {/* close button for the alert message */}
        <button onClick={closeAlert}>Try Again?</button>
      </div>
    </div>
  )
}

export default CustomAlert