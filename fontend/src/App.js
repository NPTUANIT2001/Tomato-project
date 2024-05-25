import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import DefaultLayout from "./container/DefaultLayout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<DefaultLayout />} />
    </Routes>
  );
}

export default App;
