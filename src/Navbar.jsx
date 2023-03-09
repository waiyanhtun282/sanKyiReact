import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = ({setItems,items}) => {
  const [search,setSearch] =useState('');
  // console.log(search)
  const formHandler =(e) => {
    e.preventDefault();
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(search));
    // console.log(filteredItems);
    setItems(filteredItems)
  };

  return (
    <div className="container container-lg p-5 bg-[#ffffff] shadow-md sticky top-0 left-0 opacity-[0.9]">
      <div className="flex justify-between">
        <h3 className="flex items-center">
          <Link to={'/'}>
            <GiShoppingCart className="text-3xl text-fuchsia-600" />
          </Link>
          <span className="text-rose-500 ml-3 text-[20px] italic font-semibold">
            Shopping List
          </span>
        </h3>
        <form action="" onSubmit={formHandler}>
          <input
            type="text" value={search}
            placeholder="Search products..." onChange={e => setSearch(e.target.value)}
            className="bg-transparent border-b-2 border-b-pink-500 placeholder-teal-500 pb-1 outline-none"
          />
        </form>
      </div>
    </div>
  );
}

export default Navbar
