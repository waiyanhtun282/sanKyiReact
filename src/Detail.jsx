import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = () => {
  const {id} =useParams();
  const [items,setItems] =useState({});
  const [readmore,setReadmore] =useState(true);
  useEffect(() => {
    fetchProducts();
  },[]);
  
  const fetchProducts = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
      setItems(data);
      // console.log(data)
    };
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className=" shadow-md rounded-3xl border-2 border-pink-200 hover:border-pink-500 transition-all duration-300 hover:shadow-lg  p-5 flex items-center gap-10 max-w-[800px] h-[400px] overflow-auto">
        <img
          src={items.image}
          alt=""
          className="w-[300px] h-[300px] object-cover"
        />
        <div className="">
          <h3 className=" text-[25px] font-semibold text-pink-600 text-center">
            {items.title}
          </h3>
          <p className="text-[20px] font-normal capitalize text-pink-500 my-2">
            {items.category}
          </p>
          <div className=" text-[17px] tracking-wide text-slate-400">
            <p className="">
              {/* { readmore ? `${items.description.substring(0,40)}`:items.description}  */}
              {items.description}

              <button
                className="text-rose-500 outline-none hover:border-b-rose-500 border-b-2 duration-300"
                onClick={() => setReadmore(!readmore)}
              >
                {readmore ? "readMore" : "showLess"}
              </button>
            </p>
          </div>
          <div className=" mt-3 flex justify-between ">
            <h3 className=" text-3xl text-[hotpink]">${items.price}</h3>
            <Link to={"/"}>
              <button className=" bg-[#dc3845] text-white px-3 py-2 rounded-3xl">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail
