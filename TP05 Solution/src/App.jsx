import React from "react";
import {
  ClickMeButton,
  ToggleButton,
  AppButtons,
  Counter,
  DisplayTabWithIndex,
  DisplayTabWithRemove,
  ParameterizedDisplayTab,
  DisplayTab,
  AuthForm,
  DivCreator,
} from "./Components/index";
import "./App.css";

const App = () => {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["example", "of", "two", "tabs"];

  return (
    <>
      <h2>Exercise 1</h2>
      <ClickMeButton />
      <ToggleButton />
      <AppButtons />
      <Counter />

      <h2>Exercise 2</h2>
      <h3>DisplayTab</h3>
      <DisplayTab tab={tab1} />
      <h3>DisplayTab with Index</h3>
      <DisplayTabWithIndex tab={tab1} />
      <h3>DisplayTab with Remove</h3>
      <DisplayTabWithRemove tab={tab1} />
      <h3>Parameterized DisplayTab</h3>
      <ParameterizedDisplayTab tab={tab2} />
      <h2>Exercise 3</h2>
      <h3>Authentication Form</h3>
      <AuthForm />

      <h2>Exercise 4</h2>
      <h3>Dynamic Div Creator</h3>
      <DivCreator />
    </>
  );
};

export default App;
