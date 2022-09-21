import React from "react";
import "./App.css";
import { GeneralContext, sampleGeneralContext } from "./context/GeneralContext";
import MainPage from "./views/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./views/ProductDetails";
import Navbar from "./navigation/Navbar";
import UsersProfile from "./views/UsersProfile";

function App() {
  return (
    <div className="App">
      <GeneralContext.Provider value={sampleGeneralContext}>
        <Navbar />
        <Routes>
          <Route path="/users" element={<UsersProfile />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:product" element={<ProductDetails />} />
        </Routes>
      </GeneralContext.Provider>
    </div>
  );
}

export default App;
