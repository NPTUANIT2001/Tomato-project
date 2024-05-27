import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Major from "../pages/major/Major";
import MajorEdit from "../pages/major/MajorEdit";
import Order from "../pages/order/Order";
import Overview from "../pages/overview/Overview";
import Product from "../pages/product/Product";

const routes = [
  { path: "/*", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "major", component: <Major /> },
  { path: "product", component: <Product /> },
  { path: "cart", component: <Cart /> },
  { path: "order", component: <Order /> },
  { path: "overview", component: <Overview /> },

  {
    path: "major/:id",
    component: <MajorEdit />,
  },
];
export default routes;
