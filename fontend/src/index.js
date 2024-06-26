import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";
// import { LoadingBar } from "react-redux-loading-bar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <StoreContextProvider>
          <div className="position-absolute w-100" style={{ zIndex: 100 }}>
            {/* <LoadingBar
            updateTime={100}
            className="bg-danger"
            style={{ height: "2px" }}
          /> */}
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <App />
        </StoreContextProvider>
      </BrowserRouter>
    </PersistGate>
    {/* <StrictMode> */}

    {/* </StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
