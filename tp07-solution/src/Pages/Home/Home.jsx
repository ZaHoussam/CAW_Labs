import { useContext, useState } from "react";
import style from "./Home.module.css";
import { AppContext } from "../../Context/AppProvider";
import { Button } from "../../Components/index";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { username, setUsername } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setUsername(inputValue);
      setInputValue("");
      navigate("/menu");
    }
  };

  const handelClick = (username) => {
    setUsername(username);
    navigate("/menu");
  };

  return (
    <section className={style.hero}>
      <h2 className={style.title}>
        The best pizza.<span>Straight out of the oven, straight to you.</span>
      </h2>
      {username ? (
        <Button
          btn={`continue ordering, ${username}`}
          onClick={() => handelClick(username)}
        />
      ) : (
        <div className={style.form}>
          <label>👋 Welcome! Please start by telling us your name:</label>
          <input
            type="text"
            name="text"
            placeholder="Your full name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      )}
      {inputValue ? (
        <Button btn="start ordering" onClick={() => handelClick(inputValue)} />
      ) : null}
    </section>
  );
};

export default Home;
