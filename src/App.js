import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './styles/navbar.css'
import { Routes, Route } from 'react-router-dom'
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
