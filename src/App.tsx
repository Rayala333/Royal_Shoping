import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    // <div>
    //   
    // </div>
    
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Product/>}></Route>
          <Route path='cart' element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
