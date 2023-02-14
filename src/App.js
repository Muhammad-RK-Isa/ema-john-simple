import './App.css';
import Shop from './Components/Shop/Shop';
import SummaryPannel from './Components/SummaryPannel/SummaryPannel';
import { useEffect, useState } from 'react';
import productsData from './fakeData/products.json';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './Components/OrderReview/OrderReview';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { addToDb, deleteShoppingCart, getStoredCart, removeFromDb } from './utilities/fakedb';

function App() {
  const [products, setProducts] = useState(productsData);
  
  const storedCart = getStoredCart();
  const getStoredKeys = Object.keys(storedCart);

  const getProducts = getStoredKeys.map(key => {
    const product = products.find(product => product.id === key);
    product.quantity = storedCart[key];
    return product;
  });
    
  const [cart, setCart] = useState(getProducts);

  const addToCart = (product) => {
    addToDb(product.id);
    let newCart;
    switch (cart.includes(product)) {
      case true:
        newCart = [...cart]
        break;
      case false:
        newCart = [...cart, product]
        break;
    };
    setCart(newCart);
  };


  // deleteShoppingCart();
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index path="/" element={<Shop cart={cart} addToCart={addToCart} products={products} />} />
          <Route path='/:productID' element={<ProductDetails addToCart={addToCart} products={products} />} />
          <Route path="order_review" element={<OrderReview cart={cart}/>} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
