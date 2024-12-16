import { Link, useNavigate } from "react-router-dom";
import style from "./Cart.module.css";
import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import { Button } from "../../Components/index";

const Cart = () => {
  const { data, numOrder, username, setNumOrder } = useContext(AppContext);
  const navigate = useNavigate();

  const add = (id) => {
    setNumOrder((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const increase = (id) => {
    setNumOrder(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id ? { ...item, count: item.count - 1 } : item
          )
          .filter((item) => item.count > 0) // Remove items with count <= 0
    );
  };

  const removeItem = (id) => {
    setNumOrder((prevItems) => prevItems.filter((item) => item.id !== id));
  };

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

  return (
    <section className={style.cart}>
      <Link to="/menu" className={style.link}>
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
        <span className="txt">back to menu</span>
      </Link>
      {numOrder.length > 0 ? (
        <>
          <ul className={style.cart_content}>
            {data
              .filter((item1) =>
                numOrder.some((item2) => item1.id === item2.id)
              )
              .map((item, index) => (
                <li className={style.item} key={item.id}>
                  <span
                    className={style.title}
                  >{`${numOrder[index].count} x ${item.name}`}</span>
                  <div className={style.action}>
                    <span className={style.price}>
                      {`$${item.price * numOrder[index].count}`}
                    </span>
                    <Button btn="-" onClick={() => increase(item.id)} />
                    {numOrder[index].count}
                    <Button btn="+" onClick={() => add(item.id)} />
                    <Button
                      btn="delete"
                      onClick={() => {
                        removeItem(item.id);
                      }}
                    />
                  </div>
                </li>
              ))}
          </ul>
          <div className={style.btns}>
            <Button btn="order pizzas" onClick={() => navigate("/order/new")} />
            <Button
              btn="clear cart"
              onClick={() => {
                setNumOrder([]);
              }}
            />
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Cart;
