import React from 'react';
import { useParams } from 'react-router-dom';
import { TfiLocationPin } from 'react-icons/tfi'; // Make sure this is imported

const ProductDetails = ({ Server }) => {
  const { id } = useParams();

  // Convert id to number if your Server item IDs are numbers
  const product = Server.find(item => String(item.id) === id);

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found</div>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center my-5">Product Details</h1>
      <div className="border p-4 rounded-lg shadow-md max-w-md mx-auto">
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover mb-4 rounded" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <div className='flex items-center justify-between'>
          <p className="text-xl font-bold mt-2">{product.price}</p>
          <div className='flex items-center gap-1 mt-2'>
            <TfiLocationPin />
            <p className='text-sm font-semibold'>{product.location}</p>
          </div>
        </div>
      </div>




      
    </div>
  );
};

export default ProductDetails;
