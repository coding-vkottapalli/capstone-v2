import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.route.jsx";
import Navigation from "./routes/navigation/navigation.route.jsx";
import Shop from "./routes/shop/shop.route.jsx";
import SignIn from "./routes/sign-in/sign-in.route.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
