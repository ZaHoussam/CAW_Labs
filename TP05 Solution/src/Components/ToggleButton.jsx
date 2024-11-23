import React, { useState } from "react";

const ToggleButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <p>{clicked ? "Clicked" : "Not Clicked"}</p>
    </div>
  );
};

export default ToggleButton;
