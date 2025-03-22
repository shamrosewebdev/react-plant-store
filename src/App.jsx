import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import ShoppingCart from "./pages/ShoppingCart";
import Header from "./components/Header";
import "./index.css";

function App() {
  const products = [
    { id: 1, name: "Monstera", price: 25, category: "Tropical", image: "/images/monstera.jpg" },
    { id: 2, name: "Snake Plant", price: 20, category: "Low Maintenance", image: "/images/snake-plant.jpg" },
    { id: 3, name: "Fiddle Leaf Fig", price: 30, category: "Decorative", image: "/images/fiddle-leaf-fig.jpg" },
    { id: 4, name: "Aloe Vera", price: 15, category: "Low Maintenance", image: "/images/aloe-vera.jpg" },
    { id: 5, name: "Pothos", price: 18, category: "Tropical", image: "/images/pothos.jpg" },
    { id: 6, name: "ZZ Plant", price: 22, category: "Low Maintenance", image: "/images/zz-plant.jpg" }
  ];

  const categories = ['Tropical', 'Low Maintenance', 'Decorative'];

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing products={products} categories={categories} />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
