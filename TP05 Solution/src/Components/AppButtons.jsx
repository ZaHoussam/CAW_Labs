import React, { useState } from "react";

const AppButtons = () => {
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setButtonClicked(buttonNumber);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>
      {buttonClicked && <p>Button #{buttonClicked} was clicked</p>}
    </div>
  );
};

export default AppButtons;
