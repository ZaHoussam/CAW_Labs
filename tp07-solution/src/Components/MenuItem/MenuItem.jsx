import style from "./MenuItem.module.css";
import { Button } from "../../Components/index";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/AppProvider";

const MenuItem = ({ id, name, image, ingredients, price }) => {
  const { numOrder, setNumOrder } = useContext(AppContext);
  const [btn, setBtn] = useState("add to cart");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const existingItem = numOrder.find((item) => item.id === id);
    if (existingItem) {
      setBtn("delete");
      setCount(existingItem.count);
    }
  }, [id, numOrder]);

  useEffect(() => {
    localStorage.setItem("numOrder", JSON.stringify(numOrder));
  }, [numOrder]);

  const handelButton = (btn, id) => {
    if (btn === "add to cart") {
      const item = { id: id, count: 1 };
      setNumOrder([...numOrder, item]);
      setBtn("delete");
      setCount(1);
    } else if (btn === "delete") {
      setNumOrder((prevItems) => prevItems.filter((item) => item.id !== id));
      setBtn("add to cart");
      setCount(0);
    }
  };

  const add = (id) => {
    setCount((prevCount) => prevCount + 1);
    setNumOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: count + 1 } : item
      )
    );
  };

  const increase = (id) => {
    if (count === 1) {
      handelButton("delete", id);
      return;
    }
    setCount((prevCount) => prevCount - 1);
    setNumOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: count - 1 } : item
      )
    );
  };

  return (
    <div className={style.card}>
      <img src={image} alt={`pizza-${id}`} />
      <div className={style.info}>
        <h3>{name}</h3>
        <p>
          {ingredients.map((ing, i) => (
            <React.Fragment key={i}>{`${ing}${
              i < ingredients.length - 1 ? ", " : ""
            }`}</React.Fragment>
          ))}
        </p>
        <div className={style.action}>
          <span className={style.price}>{`$${price}`}</span>
          <div className={style.addCart}>
            {btn === "delete" ? (
              <div className={style.addCart}>
                <Button btn="-" onClick={() => increase(id)} />
                {count}
                <Button btn="+" onClick={() => add(id)} />
              </div>
            ) : null}
            <Button
              btn={btn}
              onClick={() => {
                handelButton(btn, id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
