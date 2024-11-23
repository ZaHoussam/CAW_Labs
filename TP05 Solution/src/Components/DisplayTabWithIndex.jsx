import React from "react";

const DisplayTabWithIndex = ({ tab }) => (
  <ul>
    {tab.map((item, index) => (
      <li key={index}>
        Element {index + 1} is: {item}
      </li>
    ))}
  </ul>
);

export default DisplayTabWithIndex;
