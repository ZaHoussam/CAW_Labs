import style from "./MenuDisplay.module.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import { Link } from "react-router-dom";
import { MenuItem } from "../../Components/index";

const MenuDisplay = () => {
  const { data, setData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { username } = useContext(AppContext);

  if (!username) {
    return (
      <div className={style.message}>
        <h4 className={style.title}>You have create an account</h4>
        <Link to="/" className={style.link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 8 12 12 16"></polyline>
            <line x1="16" y1="12" x2="8" y2="12"></line>
          </svg>
          <span className="txt">back to home</span>
        </Link>
      </div>
    );
  }

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://zahoussam.github.io/solid-js-data/pizza_api.json")
        .then((response) => {
          setData(response.data.pizzas);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const loadElements = [];
  for (let i = 0; i < 9; i++) {
    loadElements.push(<span className={style.box} key={i}></span>);
  }

  if (loading)
    return (
      <div className={style.overlay}>
        <div className={style.loader}>{loadElements}</div>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className={style.cards}>
      {data.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          ingredients={item.ingredients}
          price={item.price}
        />
      ))}
    </section>
  );
};

export default MenuDisplay;
