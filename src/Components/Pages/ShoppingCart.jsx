// import bag from '/Screenshot from 2025-07-05 11-12-57.png'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiSealWarningLight } from "react-icons/pi";
import { IoCard } from "react-icons/io5";
import { Link } from 'react-router';

const ShoppingCart = () => {
  return (
    <>
    <div>

    <div className='p-5 lg:p-10 lg:px-14'>
      <h1 className="text-3xl lg:text-4xl font-semibold mb-2">Shopping Cart.</h1>
      <p className="text-gray-700 text-sm lg:text-base">Effortlessly manage your purchases and checkout with ease.</p>
    </div>

    <div className='mt-5 flex flex-col lg:flex-row lg:mx-20'>
        <div className='p-5'>

             <div className='lg:flex lg:gap-96 lg:items-center pb-4 w-fit '>

                 <div className='flex gap-3'>

                  <div><img className='lg:w-24 w-24' src="" alt="" /></div>

                  <div>
                    <h1 className='font-medium pb-1 lg:text-xl'>Plane totebag</h1>
                    <p className='text-sm'>thetotebag1500</p>
                   <div className='text-yellow-300 flex gap-1 pt-1 '>
                   <div className='bg-black  p-1 rounded-md w-fit'><IoMdStar /></div>
                   <div className='bg-black w-fit p-1 rounded-md'><IoMdStar /></div>
                   <div className='bg-black w-fit p-1 rounded-md'><IoMdStar /></div>
                   <div className='bg-black w-fit p-1 rounded-md'><IoMdStarHalf /></div>
                   <div className='bg-black w-fit p-1 rounded-md'><IoMdStarOutline /></div>
                   </div>

                   <span className='text-gray-300'>Color:</span> <span> Cream</span>
                  </div>
                      
                 </div>


                 <div className='flex items-center gap-16 lg:gap-44 pt-4 lg:pt-0'>
                 <div className='bg-white shadow w-fit flex gap-4 items-center py-1 px-4 rounded-md'><button className='font-semibold text-2xl'>+</button> <p className='bg-white shadow p-1 rounded-md'>1</p> <button  className='font-semibold text-2xl'>-</button></div>

                  <div><p className='font-semibold lg:text-xl'>&#8358;4,000</p></div>

                  <div className='bg-black text-white text-2xl p-2 w-fit'><FaRegTrashAlt /></div>
                 </div>

             </div>
             <hr className='border-t border-gray-500 mt-3 mb-12'/>
             {/*  */}

             

             

        </div>



     <div className='bg-[#f5f4f9] w-fit lg:w-[500px] p-10 py-20  rounded-md'>
      <h1 className='font-medium text-3xl'>Order Summary</h1>
<div>

      <div className='flex pt-7 justify-between'>
        <p>Subtotal</p>
        <p className='font-semibold'>&#8358;4,000.00</p>
      </div>

      <div className='flex pt-7 justify-between'>
        <p>Delivery</p>
        <p className='font-semibold'>&#8358;1,500.00</p>
      </div>

      <div className='flex pt-7 justify-between'>
        <p>Zip</p>
        <p className='font-semibold'>&#8358;1,000.00</p>
      </div>

      <div className='flex pt-7 justify-between'>
        <p>Front & Back Design</p>
        <p className='font-semibold'>&#8358;1,000.00</p>
      </div>

      <hr className='border-t border-gray-500 mt-8'/>

      <div className='flex font-semibold pt-2 justify-between'>
        <p className='text-2xl font-semibold'>Total</p>
        <p>&#8358;7,500.00</p>
      </div>

      <hr className='border-t border-gray-500 mt-2 pb-5'/>

      <div className='flex gap-1 p-1 bg-white shadow-lg rounded-md'>
        <div><PiSealWarningLight /></div>
        <p>Please your totebag will be delivered in three to five working days</p>
      </div>
</div>

      <div className='pt-14'>
        <Link to="/payment">
        <button className='flex items-center gap-1 text-white bg-black rounded-lg py-2 pl-4 pr-[121px] lg:pr-64'>Payment options <span><IoCard /></span> </button>
        </Link>
      </div>
     </div>

    

    </div>





    </div>
    </>
  )
}

export default ShoppingCart