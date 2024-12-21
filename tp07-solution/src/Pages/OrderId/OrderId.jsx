import { useParams, useLocation } from "react-router-dom";
import style from "./OrderId.module.css";
import React, { useState } from "react";
import { Button } from "../../Components/index";

const OrderId = () => {
  const { id } = useParams();
  const location = useLocation();
  const [formData, setFormData] = useState(location.state);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const calculatePreparationTime = () => {
    const totalMeals = formData.numOrder.reduce(
      (total, order) => total + order.count,
      0
    );
    const preparationTimePerMeal = 20;
    const totalPreparationTime = totalMeals * preparationTimePerMeal;
    const priorityMultiplier = formData.isPriority ? 0.5 : 1;

    const adjustedTime = totalPreparationTime * priorityMultiplier;
    const hours = Math.floor(adjustedTime / 60);
    const minutes = Math.round(adjustedTime % 60);

    return { hours, minutes };
  };

  if (!formData) {
    return <p>Order details not found!</p>;
  }

  const renderCartItems = (data, numOrder) =>
    data
      .filter((item) => numOrder.some((order) => order.id === item.id))
      .map((item) => {
        const orderItem = numOrder.find((order) => order.id === item.id);
        return (
          <li className={style.item} key={item.id}>
            <div className={style.info}>
              <span className={style.title}>
                {`${orderItem.count} x ${item.name}`}
              </span>
              <span className={style.ingrediants}>
                {item.ingredients.join(", ")}
              </span>
            </div>
            <span className={style.price}>
              {`$${item.price * orderItem.count}`}
            </span>
          </li>
        );
      });

  const handleMakePriority = () => {
    const priorityPrice = 22.0;
    setFormData((prevFormData) => ({
      ...prevFormData,
      isPriority: true,
      totalPrice: prevFormData.totalPrice + priorityPrice,
      priorityPrice: priorityPrice,
    }));
  };

  const preparationTime = calculatePreparationTime();

  return (
    <section className={style.order}>
      <div className={style.order_header}>
        <h1>Order {`#${id}`} status</h1>
        <div className={style.status}>
          {formData.isPriority ? (
            <span className={`${style.prepare} ${style.priority}`}>
              priority
            </span>
          ) : null}
          <span className={style.prepare}>preparing order</span>
        </div>
      </div>
      <div className={style.order_content}>
        <div className={style.head}>
          <span className={style.title}>
            only:
            {preparationTime.hours > 0 ? `${preparationTime.hours} h - ` : ""}
            {preparationTime.minutes} m left 😉
          </span>
          <span className={style.time}>
            (Estimated delivery: {`${formatTime(formData.orderTime)}`})
          </span>
        </div>
        <ul className={style.body}>
          {renderCartItems(formData.data, formData.numOrder)}
        </ul>
        <div className={style.footer}>
          <span>price pizza: ${formData.baseTotalPrice.toFixed(2)}</span>
          {formData.isPriority ? (
            <span className={style.price}>
              price priority: ${formData.priorityPrice.toFixed(2)}
            </span>
          ) : null}
          <span className={style.total}>
            To pay on delivery: ${formData.totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
      {!formData.isPriority ? (
        <div className={style.footer}>
          <Button btn="make priority" onClick={handleMakePriority} />
        </div>
      ) : null}
    </section>
  );
};

export default OrderId;
