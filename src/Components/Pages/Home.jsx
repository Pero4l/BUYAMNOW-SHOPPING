import React from 'react'
import { Server } from '../../LocalServer'

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold text-center my-5">Welcome to BuyAmNow</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Server.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Home
