import style from "./Button.module.css";

const Button = ({ btn, onClick }) => {
  return (
    <button className={style.btn} onClick={onClick}>
      {btn}
    </button>
  );
};

export default Button;
