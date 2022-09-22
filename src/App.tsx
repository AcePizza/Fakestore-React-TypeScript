import React from "react";
import "./App.css";
import { GeneralContext, sampleGeneralContext } from "./context/GeneralContext";
import MainPage from "./views/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./views/ProductDetails";
import Navbar from "./navigation/Navbar";
import UserList from "./views/UserList";

function App() {
  return (
    <div className="App">
      <GeneralContext.Provider value={sampleGeneralContext}>
        <Navbar />
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:product" element={<ProductDetails />} />
        </Routes>
      </GeneralContext.Provider>
    </div>
  );
}

export default App;
