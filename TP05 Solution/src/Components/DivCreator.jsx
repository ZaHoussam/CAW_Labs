import React, { useState } from "react";

const DivCreator = () => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDivs([...divs, { height, width, color }]);
    setHeight("");
    setWidth("");
    setColor("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Background Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <button type="submit">Create Div</button>
      </form>
      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.color,
              margin: "10px",
              border: "1px solid #ccc",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DivCreator;
