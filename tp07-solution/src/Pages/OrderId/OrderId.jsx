import { useLocation } from "react-router-dom";
import React from "react";
import style from "./OrderId.module.css";

const OrderId = () => {
  const location = useLocation();
  const { name, phone, address, orderId, totalPrice } = location.state || {};

  return (
    <section className={style.order_details}>
      <h3 className={style.title}>Order Details</h3>
      <div className={style.detail}>
        <label>Name:</label>
        <span>{name}</span>
      </div>
      <div className={style.detail}>
        <label>Phone:</label>
        <span>{phone}</span>
      </div>
      <div className={style.detail}>
        <label>Address:</label>
        <span>{address}</span>
      </div>
      <div className={style.detail}>
        <label>Order ID:</label>
        <span>{orderId}</span>
      </div>
      <div className={style.detail}>
        <label>Total Price:</label>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </section>
  );
};

export default OrderId;
