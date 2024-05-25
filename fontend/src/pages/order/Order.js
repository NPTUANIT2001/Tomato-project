import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Order.css";
const Order = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <div className="container">
        <form className="place-order">
          <div className="place-order-left">
            <h2 className="title-info">Delivery Information</h2>
            <div className="multi-fields">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="Street" />
            <div className="multi-fields">
              <input type="text" placeholder="Zip code" />
              <input type="text" placeholder="Country" />
            </div>
            <input type="text" placeholder="Phone" />
          </div>
          <div className="place-order-right">
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

              <button type="submit">PROCEED TO PAYMENT</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Order;
