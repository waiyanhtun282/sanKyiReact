import React, { useState } from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProductsCarts = ({ id, title, image, price, category, description }) => {
  return (
    <div className="w-[300px] h-auto  p-5  shadow-md rounded-lg">
      <img
        src={image}
        alt=""
        className="w-[150px] h-[150px] object-cover mx-auto"
      />
      <div className="my-2">
        <div className=" flex justify-between items-center space-y-5">
          <h3 className=" text-green-600 text-[20px]">
            {title.substring(0, 14)}
          </h3>
          <h4 className=" text-red-600 text-[20px]">${price}</h4>
        </div>
        <div className="pb-4 border-y-2 border-y-pink-300">
          <h3 className="text-[18px] capitalize text-indigo-500">{category}</h3>
          <p>{description.substring(0, 50)}...</p>
        </div>
        <div className=" pt-2 flex">
          <Link to={`/detail/${id}`}>
            <button className=" bg-[#dc3845] px-3  py-1 rounded-sm text-[17px] text-white">
              Deatil
            </button>
          </Link>

          <button className="bg-black text-white  px-3 rounded-sm py-1 ml-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarts
