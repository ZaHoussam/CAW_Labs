import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";

const Header = () => {
  const { username, numOrder } = useContext(AppContext);

  return (
    <header className={style.header}>
      <Link to="/" className={style.logo}>
        fast food
      </Link>
      <div className={style.input}>
        <input type="search" name="search" placeholder="search order #" />
      </div>
      {username ? (
        <div className={style.profile}>
          <Link to="/cart" className={style.notification}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={numOrder.length > 0 ? "#e53935" : "#fefefe"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            {numOrder.length > 0 ? (
              <span className={style.count}>{numOrder.length}</span>
            ) : null}
          </Link>
          <span className={style.username}>{username}</span>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
