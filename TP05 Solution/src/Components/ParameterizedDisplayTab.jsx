import React from "react";

const ParameterizedDisplayTab = ({ tab }) => (
  <ul>
    {tab.map((item, index) => (
      <li key={index}>
        Element {index + 1} is: {item}
      </li>
    ))}
  </ul>
);

export default ParameterizedDisplayTab;
