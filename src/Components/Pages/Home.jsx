import React from 'react';
import { Link } from 'react-router-dom';
import { TfiLocationPin } from "react-icons/tfi";

const Home = ({ Server }) => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-center my-5">Welcome to BuyAmNow</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Server.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition">
                <img src={item.image} alt={item.name} className="w-full h-auto object-cover mb-4 rounded" />
                <h2 className="text-sm lg:text-sm">{item.name}</h2>
                <div className='flex items-center justify-between'>
                  <p className="text-lg font-bold mt-2">{item.price}</p>
                  <div className='flex items-center gap-1 mt-2'>
                    <TfiLocationPin />
                    <p className='text-xs lg:text-sm font-semibold'>{item.location}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
