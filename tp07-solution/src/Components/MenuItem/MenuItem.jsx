import style from "./MenuItem.module.css";
import { Button } from "../../Components/index";
import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppProvider";

const MenuItem = ({ id, name, image, ingredients, price }) => {
  const { numOrder, setNumOrder } = useContext(AppContext);
  const [btn, setBtn] = useState("add to cart");
  const [count, setCount] = useState(0);

  const handelButton = (btn = btn, id) => {
    if (btn === "add to cart") {
      const item = { id: id, count: count + 1 };
      setNumOrder([...numOrder, item]);
      setBtn("delete");
      setCount(count + 1);
    }
    if (btn === "delete") {
      setNumOrder((prevItems) => prevItems.filter((item) => item.id !== id));
      setBtn("add to cart");
    }
  };

  const add = (id) => {
    setCount(count + 1);
    setNumOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: count } : item
      )
    );
  };

  const increase = (id) => {
    if (count === 0) {
      return false;
    }
    setCount(count - 1);
    setNumOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: count } : item
      )
    );
  };

  return (
    <div className={style.card}>
      <img src={image} alt={`pizza-${id}`} />
      <div className={style.info}>
        <h3 className={style.title}>{name}</h3>
        <span className={style.ingrediants}>
          {ingredients.map((ing, i) => (
            <React.Fragment key={i}>{`${ing}, `}</React.Fragment>
          ))}
        </span>
        <div className={style.action}>
          <span className={style.price}>{`$${price}`}</span>
          <div className={style.addCart}>
            {Array.isArray(numOrder) &&
              numOrder.map((item) =>
                item.id === id ? (
                  <div className={style.addIncrease} key={item.id}>
                    <Button btn="-" onClick={() => increase(id)} />
                    {item.count}
                    <Button btn="+" onClick={() => add(id)} />
                  </div>
                ) : null
              )}
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
