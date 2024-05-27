import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/reducers/auth";
import Logo from "../assest/img/brand/growup-logo.svg";
import "./header.css";
import { assets } from "../assest/assets/assets";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div className="navbar-brand" onClick={() => navigate("/home")}>
            <img src={Logo} alt="" />
            <p className="name-company">Tomato</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/overview">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/major">
                  Major
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/cart" aria-disabled="true">
                  <img src={assets.basket_icon} alt="" />
                </NavLink>
              </li>
            </ul>

            <form className="d-flex form-sign-in" onSubmit={handleLogout}>
              <button
                type="submit"
                className="btn1 btn-primary shadow-none sign-in"
                onSubmit={handleLogout}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
