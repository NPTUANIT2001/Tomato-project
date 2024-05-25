import { Fragment } from "react";
import Header from "./Header";

import { Navigate, Route, Routes } from "react-router-dom";

import routes from "../router/router";
import { useSelector } from "react-redux";
import Footer from "./Footer/Footer";

const DefaultLayout = () => {
  const isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {isloggedIn ? (
        <Fragment>
          <Header />
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.component} />
            ))}
          </Routes>
          <Footer />
        </Fragment>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default DefaultLayout;
