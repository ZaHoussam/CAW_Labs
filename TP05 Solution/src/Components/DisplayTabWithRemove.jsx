import React, { useState } from "react";

const DisplayTabWithRemove = ({ tab }) => {
  const [items, setItems] = useState(tab);

  const removeItem = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => removeItem(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
};

export default DisplayTabWithRemove;
