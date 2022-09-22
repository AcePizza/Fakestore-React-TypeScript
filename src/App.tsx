import React from "react";
import "./App.css";

import MainPage from "./views/MainPage";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./views/ProductDetails";
import Navbar from "./navigation/Navbar";
import UserList from "./views/UserList";
import SignIn from "./views/Singin";
import { GeneralContextProvider } from "./context/GeneralContext";

function App() {
  return (
    <div className="App">
      <GeneralContextProvider>
        <Navbar />
        <Routes>
          <Route path="/singin" element={<SignIn />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:product" element={<ProductDetails />} />
        </Routes>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
