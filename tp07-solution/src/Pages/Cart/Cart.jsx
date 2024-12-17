import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import { Button } from "../../Components/index";
import style from "./Cart.module.css";

const Cart = () => {
  const { data, numOrder, username, setNumOrder } = useContext(AppContext);
  const navigate = useNavigate();

  const updateItemCount = (id, delta) => {
    setNumOrder((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, count: item.count + delta } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const removeItem = (id) => {
    setNumOrder((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setNumOrder([]);
  };

  if (!username) {
    return (
      <div className={style.message}>
        <h4 className={style.title}>You need to create an account</h4>
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
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 8 12 12 16"></polyline>
            <line x1="16" y1="12" x2="8" y2="12"></line>
          </svg>
          <span className="txt">Back to home</span>
        </Link>
      </div>
    );
  }

  const renderCartItems = () =>
    data
      .filter((item) => numOrder.some((order) => order.id === item.id))
      .map((item) => {
        const orderItem = numOrder.find((order) => order.id === item.id);
        return (
          <li className={style.item} key={item.id}>
            <span className={style.title}>
              {`${orderItem.count} x ${item.name}`}
            </span>
            <div className={style.action}>
              <span className={style.price}>
                {`$${item.price * orderItem.count}`}
              </span>
              <Button btn="-" onClick={() => updateItemCount(item.id, -1)} />
              {orderItem.count}
              <Button btn="+" onClick={() => updateItemCount(item.id, 1)} />
              <Button btn="delete" onClick={() => removeItem(item.id)} />
            </div>
          </li>
        );
      });

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
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 8 8 12 12 16"></polyline>
          <line x1="16" y1="12" x2="8" y2="12"></line>
        </svg>
        <span className="txt">Back to menu</span>
      </Link>
      {numOrder.length > 0 ? (
        <>
          <ul className={style.cart_content}>{renderCartItems()}</ul>
          <div className={style.btns}>
            <Button btn="Order Pizzas" onClick={() => navigate("/order/new")} />
            <Button btn="Clear Cart" onClick={clearCart} />
          </div>
        </>
      ) : (
        <div className={style.emptyCart}>Your cart is empty!</div>
      )}
    </section>
  );
};

export default Cart;
