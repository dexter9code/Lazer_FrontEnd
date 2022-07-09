import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux/es/exports";

import icon from '../assets/icons/paytm.png'


const initialValue=0
const Tax = 8.5;

const Order = () => {
    const cart=useSelector((state)=>state.cart.cartItem)
    const [items,setItems]=useState(cart)
    const [total, setTotal] = useState(items.map(m=>m.price + Math.ceil(m.price*(Tax/100))))
    console.log(total)

  const handleRemove = (item) => {
    const updatedData=items.filter(m=>m.id!==item.id)
    setItems(updatedData)
    setTotal(updatedData.map(m=>m.price  + Math.ceil(m.price*(Tax/100))))
    console.log(item);
  };
  const netTotal= total.reduce(
    (previousValue, currentValue) => previousValue + currentValue,initialValue
  )

  return (
    <div className="flex justify-around">
      <div>
        <h1 className=" mt-2 mb-5 uppercase md:font-bold text-3xl lg:text-center ">
          Item Bag
        </h1>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {items.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.image}
                  alt={"image"}
                  className="w-[300px] h-[300px] object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="flex justify-around mt-3">
                <h3 className="mt-4 text-gray-700 text-center px-2 py-1 mb-3 md:font-semibold text-lg">
                  {product.name}
                </h3>
                <button
                  onClick={() => handleRemove(product)}
                  className="bg-blue-400 rounded-lg px-2 mb-3 mt-3 text-sm"
                >
                  Remove
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className=" lg:px-4 mt-12 py-5">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 text-center">Product</th>
              <th className="px-4 text-center">Price</th>
              <th className="px-4">Tax</th>
              <th className="px-4">Price With Tax</th>
            </tr>
          </thead>
          {items.map((item) => (
            <>
              <tbody>
                <tr className="text-center border-b" key={item.id}>
                  <td className="p-3 ">{item.name}</td>
                  <td >{item.price}</td>
                  <td>{Tax}%</td>
                  <td className="px-3 text-center">
                   $ {[item.price + Math.ceil(item.price * (Tax / 100))]}{" "}
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
            <div className="flex justify-around mt-5">
                <h1 className="md:text-xl font-bold capitalize px-5 py-3">subtotal</h1>
                <h1 className="px-5 py-3 ml-2">$ {netTotal}</h1>
            </div>
            <div className="text-center mt-5">
                <button className=" px-5 py-2 border rounded-md text-base font-bold text-white bg-gradient-to-r from-indigo-400 to-red-500 lg:w-[300px]  ">Pay Now</button>
            </div>
            <h2 className="text-center mt-3 italic text-sm font-semibold capitalize">or Pay With</h2>
            <div className="mt-5 flex justify-center py-2">
                <img className="w-[55px] hover:opacity-80"  src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="google_pay" />
                <img className="w-[55px] ml-10  hover:opacity-80" src={icon} alt="paytm_img" />
            </div>
      </div>
    </div>
  );
};

export default Order;
