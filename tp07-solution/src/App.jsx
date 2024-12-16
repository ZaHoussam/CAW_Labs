import { Routes, Route } from "react-router-dom";
import {
  Home,
  Order,
  Cart,
  MenuDisplay,
  NewOrder,
  OrderId,
} from "./Pages/index";
import { Header } from "./Components/index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<MenuDisplay />} />
        <Route path="/order" element={<Order />}>
          <Route path="new" element={<NewOrder />} />
          <Route path=":id" element={<OrderId />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
