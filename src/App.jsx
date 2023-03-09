import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './cardcomponent/Products';
import Detail from './Detail';
import Navbar from './Navbar';



const App = () => {
  const [items,setItems] = useState([]);

  //useEffect
  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts =async() => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setItems(data);
  };
  return (
    <>
      <Navbar setItems={setItems} items={items}/>
    <Routes>
      <Route path='/' element={<Products items={items} />}/>
      <Route path='/detail/:id' element={<Detail />}/>
      </Routes>      
    </>
  )
}

export default App
