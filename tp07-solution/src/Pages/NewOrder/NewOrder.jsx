import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppProvider";
import style from "./NewOrder.module.css";

const NewOrder = () => {
  const { username, numOrder, data } = useContext(AppContext);
  const navigate = useNavigate();
  const [baseTotalPrice, setBaseTotalPrice] = useState(0);
  const [isPriority, setIsPriority] = useState(false);
  const priorityPrice = 5.0;
  useEffect(() => {
    const total = numOrder.reduce((acc, order) => {
      const item = data.find((product) => product.id === order.id);
      return acc + (item ? item.price * order.count : 0);
    }, 0);
    setBaseTotalPrice(total + (isPriority ? priorityPrice : 0));
  }, [numOrder, data, isPriority]);
  const generateOrderId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = "";
    for (let i = 0; i < 8; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  };

  const handlePriorityChange = (e) => {
    setIsPriority(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    if (!isValidPhoneNumber(phone)) {
      alert("Please enter a valid phone number containing only digits.");
      return;
    }
    const orderId = generateOrderId();
    const encodedOrderId = encodeURIComponent(orderId);
    const finalTotalPrice = baseTotalPrice;
    const formData = {
      name: e.target.name.value,
      phone,
      address: e.target.address.value,
      orderId,
      baseTotalPrice: finalTotalPrice - (isPriority ? priorityPrice : 0),
      priorityPrice: isPriority ? priorityPrice : 0,
      totalPrice: finalTotalPrice,
      isPriority,
      orderTime: Date.now(),
    };
    navigate(`/order/${encodedOrderId}`, { state: formData });
  };

  return (
    <section className={style.new_order}>
      <h3 className={style.title}>Ready to order? Let's go!</h3>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.input}>
          <label className={style.input_header}>First Name</label>
          <input type="text" name="name" defaultValue={username} required />
        </div>
        <div className={style.input}>
          <label className={style.input_header}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            pattern="\d+"
            title="Phone number should contain only digits."
            required
          />
        </div>
        <div className={style.input}>
          <label className={style.input_header}>Address</label>
          <input type="text" name="address" required />
        </div>
        <div className={`${style.input} ${style.checkbox}`}>
          <input
            id="form-checkbox-1"
            name="priority"
            type="checkbox"
            checked={isPriority}
            onChange={handlePriorityChange}
          />
          <label htmlFor="form-checkbox-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
            >
              <mask id="checkbox-mask" fill="white">
                <rect width="200" height="200"></rect>
              </mask>
              <rect
                mask="url(#checkbox-mask)"
                strokeWidth="40"
                width="200"
                height="200"
              ></rect>
              <path strokeWidth="15" d="M52 111.018L76.9867 136L149 64"></path>
            </svg>
            <span>Want to give your order priority? (+$5.00)</span>
          </label>
        </div>
        <input
          type="submit"
          className={style.submit_btn}
          value={`Order for now: $${baseTotalPrice.toFixed(2)}`}
        />
      </form>
    </section>
  );
};

export default NewOrder;
