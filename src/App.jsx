import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Announcement,
  Navbar,
  Footer,
  All,
  Tops,
  Bottoms,
  Accessories,
  NewArrivals,
  Anniversary,
} from "./components";

import { Home, Shop, Cart } from "./pages";


function App() {
  const location = useLocation();
  const isNewArrivals = location.pathname === "/";
  const isAnniversary = location.pathname === "/";
  return (
    <React.Fragment>
      <Announcement />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />}>
          <Route path="/Shop" element={<All />} />
          <Route path="/Shop/Tops" element={<Tops />} />
          <Route path="/Shop/Bottoms" element={<Bottoms />} />
          <Route path="/Shop/Accessories" element={<Accessories />} />
        </Route>
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      {isNewArrivals && <NewArrivals />}
      {isAnniversary && <Anniversary />}

      <Footer />
    </React.Fragment>
  );
}

export default App;
