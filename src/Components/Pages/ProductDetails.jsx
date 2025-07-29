import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import bag from '/Screenshot from 2025-07-05 11-12-57.png';
import { TfiLocationPin } from 'react-icons/tfi'; 


const ProductDetails = ({ Server }) => {
  const { id } = useParams();

 
  const product = Server.find(item => String(item.id) === id);

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found</div>;
  }

  return (
    <>
    <div className="w-11/12 mx-auto">
    



 <div className="min-h-screen px-4 py-8 font-sans max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold">Product Details</h2>
      <p className="text-gray-600 pt-3">Product view details to see full information.</p>


      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={product.image}
            alt="Product image"
            className="object-cover rounded-md w-full max-h-[450px]"
          />
        </div>


        <div className="w-full lg:w-1/2 space-y-3">
          <p className="text-xs text-gray-500 mt-4">Product</p>

          <div className='flex items-center gap-1 mt-2'>
                              <TfiLocationPin className='text-sm' />
                              <p className='text-xs lg:text-sm'>{product.location}</p>
                            </div>
          <div className="flex items-center gap-2 text-sm text-gray-800 bg-green-100 border px-2 py-1 w-fit rounded">
            🚚 Delivery fee
            <span className="bg-gray-900 px-1 py-1 rounded text-xs text-gray-100">₦1,500</span>
          </div>

          


          <h3 className="text-xl lg:text-2xl font-semibold">{product.name}</h3>


          <div className="flex flex-wrap items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
            <span className="p-1 ml-2 border rounded-md font-bold">2.4</span>
          </div>


          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm font-medium">
              Price:
              <span className="text-lg border border-gray-300 p-1 ml-1 rounded">{product.price}</span>
            </div>


            <span className="font-bold text-lg text-gray-400">|</span>
            <div className="flex items-center gap-2">
              <span>Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded px-2">
                <button className="text-lg">+</button>
                <span className="px-2">1</span>
                <button className="text-lg">-</button>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            {product.info}
          </p>

          <div className="flex flex-col gap-3">
            <button className="py-2 w-full sm:w-7/12 border border-black rounded-md text-black font-medium">
              Buy Now
            </button>
            <button className="py-3 bg-black text-white rounded-md font-medium w-full sm:w-7/12">
              Add to cart
            </button>
          </div>

          <div className="relative mt-4">
            <select className="w-full border border-green-700 outline-none rounded-md px-4 py-3 text-green-700">
              <option>Select your location</option>
              <option>Lagos</option>
              <option>Abuja</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-16">
            
            <h1>Other image of Product</h1>
            <div className='w-20 flex gap-3 pt-3'>
                <img src={product.image1} alt="" />
                <img src={product.image2} alt="" />
                <img src={product.image3} alt="" />
                <img src={product.image3} alt="" />
            </div>
      </div>

      {/* <div className="mt-4 space-x-3 text-sm text-gray-600 flex flex-wrap">
        <label><input type="radio" name="zip" /> Design</label>
        <label><input type="radio" name="zip" /> Plane</label>
        <label><input type="radio" name="zip" /> Design and Plane</label>
        <label><input type="radio" name="zip" /> None</label>
        <p className="text-xs text-gray-400 mt-2 w-full">Design adds ₦1,000 extra while Plane adds ₦500</p>
      </div> */}

      <div className="mt-4">
        <p className="text-gray-900 text-xl font-bold">Description</p>
        <p className="text-sm text-gray-600 mb-6">
            {product.description}
</p>

      </div>

      {/* <div className="mt-6 max-w-2xl flex flex-col mx-auto px-4">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <p className="text-gray-500 mb-6 text-sm">Customer's Testimonies</p>

        <div className="mb-10 pb-6">
          <div className="flex items-center gap-3">
            <img src={bag} alt="User" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium">Yusuf</p>
              <p className="text-sm text-gray-500">May 15, 2024</p>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1 flex-wrap">
            <span className="text-sm font-semibold">Rating:</span>
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 bg-black rounded-md p-2">
                <AiFillStar />
              </span>
            ))}
            <span className="p-2 bg-black text-yellow-400 rounded-md">
              <AiOutlineStar />
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Size: <span className="font-semibold">16.g</span> | Color:{" "}
            <span className="font-semibold">White</span> | Design Pattern:
            <span className="font-semibold">Classic</span>
          </p>

          <div className="flex flex-wrap gap-3 mt-3">
            <img src={bag} alt="Stylish" className="h-24 w-24 rounded-lg border object-cover" />
            <div className="h-24 w-24 rounded-lg border flex items-center justify-center text-gray-400">+</div>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            This bag is stylish and fits all my essentials. Would definitely recommend it for everyday use.
          </p>
        </div>
      </div> */}

      {/* <div className="mt-10">
        <h2 className="text-xl font-medium">Bags You may like</h2>
        <p className="text-sm text-gray-600">Similar bags from the one selected</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 cursor-pointer">
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <img src={bag} alt="Bag" className="rounded bg-contain w-full" />
              <div className="flex flex-row justify-between mt-4 text-gray-800">
                <span>Stylish Bag</span>
                <span>₦5,000</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>

      
    </div>
    </>
  );
};

export default ProductDetails;
