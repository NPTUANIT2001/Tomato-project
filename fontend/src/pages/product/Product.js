import { useState } from "react";
import { menu_list } from "../../assest/assets/assets";
import "./product.css";
import FoodDisplay from "../../component/FoodDisplay/FoodDIsplay.js";
import AppDownLoad from "../../component/AppDownLoad/AppDownLoad.js";
const Product = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <div className="container">
        <div className="bg-tomato">
          <div className="bg-content">
            <h2>Order your favorite food here</h2>
            <p>
              {" "}
              Choose from a delivers menu featuring a delectable array of
              dishes. Our mission is to satisfy your dining experience, one
              delicous meat at a time
            </p>

            <button type="button" className="btn1 btn-primary shadow-none">
              View menu
            </button>
          </div>
        </div>
        <div className="explore-menu" id="explore-menu">
          <h1>Explore our menu</h1>
          <p className="explore-menu-text">
            Choose from a delivers menu featuring a delectable array of dishes.
            Our mission is to satisfy your dining experience, one delicous meat
            at a time
          </p>

          <div className="explore-menu-list">
            {menu_list.map((menu, idx) => {
              return (
                <div
                  key={idx}
                  className="explore-menu-list-item"
                  onClick={() =>
                    setCategory((prev) =>
                      prev === menu.menu_name ? "All" : menu.menu_name
                    )
                  }
                >
                  <img
                    className={category === menu.menu_name ? "active" : ""}
                    src={menu.menu_image}
                    alt="item"
                  />
                  <p>{menu.menu_name}</p>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <FoodDisplay category={category} />
        <AppDownLoad />
      </div>
    </>
  );
};

export default Product;
