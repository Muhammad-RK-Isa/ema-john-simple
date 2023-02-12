import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import SummaryPannel from './Components/SummaryPannel/SummaryPannel';
import { useState } from 'react';
import productsData from './fakeData/products.json';

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };


  return (
    <div className="App">
      <Header></Header>
      <Shop addToCart={addToCart} products={products}></Shop>
      <SummaryPannel cart = {cart}></SummaryPannel>
    </div>
  );
}

export default App;
