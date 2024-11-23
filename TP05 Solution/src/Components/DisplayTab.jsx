import React from "react";

const DisplayTab = ({ tab }) => (
  <ul>
    {tab.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default DisplayTab;
