import { useParams, useLocation } from "react-router-dom";
import style from "./OrderId.module.css";

const OrderId = () => {
  const { id } = useParams();
  const location = useLocation();
  const formData = location.state;
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

  if (!formData) {
    return <p>Order details not found!</p>;
  }

  return (
    <section className={style.order}>
      <div className="order-header">
        <h1>Order {`#${id}`} status</h1>
        <div className="status">
          {formData.isPriority ? (
            <span className="prepare priority">priority</span>
          ) : null}
          <span className="prepare">preparing order</span>
        </div>
      </div>
      <div className="order-content">
        <div className="haad">
          <span className="title">only 59 minutes left 😉</span>
          <span className="time">
            (Estimated delivery: {`${formatTime(formData.orderTime)}`})
          </span>
        </div>
      </div>
      <p>Name: {formData.name}</p>
      <p>Phone: {formData.phone}</p>
      <p>Address: {formData.address}</p>
      <p>
        Priority:
        {formData.isPriority
          ? `Yes (+$${formData.priorityPrice.toFixed(2)})`
          : "No"}
      </p>
      <p>Base Total Price: ${formData.baseTotalPrice.toFixed(2)}</p>
      <p>Total Price: ${formData.totalPrice.toFixed(2)}</p>
    </section>
  );
};

export default OrderId;
