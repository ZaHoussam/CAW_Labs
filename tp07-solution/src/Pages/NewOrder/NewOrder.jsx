import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import style from "./NewOrder.module.css";

const NewOrder = () => {
  const { username, numOrder } = useContext(AppContext);

  return (
    <section className={style.new_order}>
      <h3 className={style.title}>Ready to order? Let's go!</h3>
      <form action="" className={style.form}>
        <div className={style.input}>
          <label className={style.input_header}>first name</label>
          <input type="text" name="name" defaultValue={username} />
        </div>
        <div className={style.input}>
          <label className={style.input_header}>Phone number</label>
          <input type="tel" name="phone" />
        </div>
        <div className={style.input}>
          <label className={style.input_header}>Address</label>
          <input type="text" name="address" />
        </div>
        <div className={(style.input, style.checkbox)}>
          <input id="form-checkbox-1" name="checkbox" type="checkbox" />
          <label htmlFor="form-checkbox-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
            >
              <mask fill="white" id="checkbox-mask">
                <rect height="200" width="200"></rect>
              </mask>
              <rect
                mask="url(#checkbox-mask)"
                strokeWidth="40"
                height="200"
                width="200"
              ></rect>
              <path strokeWidth="15" d="M52 111.018L76.9867 136L149 64"></path>
            </svg>
            <span>Want to yo give your order priority?</span>
          </label>
        </div>
        <input
          type="submit"
          value={`order for now: ${console.log(numOrder)}`}
        />
      </form>
    </section>
  );
};

export default NewOrder;
