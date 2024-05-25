import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { food_list, getTotalCartAmount, removeCart, cartItem } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, idx) => {
            if (cartItem[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price * cartItem[item._id]}</p>
                    <p className="cross" onClick={() => removeCart(item._id)}>
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart total</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p className="cart-total-details-value">
                ${getTotalCartAmount()}
              </p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p className="cart-total-details-value">${0}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Total</p>
              <p className="cart-total-details-value">
                ${getTotalCartAmount()}
              </p>
            </div>

            <button type="button" onClick={() => navigate("/order")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you promo code, enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code in here" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
