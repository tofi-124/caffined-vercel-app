import Image from "next/image";
import React, { useContext, useState } from "react";
import CartContext from "../Context/store";
import { AnimatePresence, motion } from "framer-motion";

const CartItems = () => {
  const { cart, setCart, total, setTotal } = useContext(CartContext);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  return cart.length === 0 ? (
    <p className="">Your sample request list is empty</p>
  ) : (
    <div className="flex justify-center items-center py-12 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-12 ">Sample Request</h1>
        {cart.map((item, ind) => {
          const handleIncrement = () => {
            setCart((prev) => {
              const newCart = [...prev];
              newCart[ind].quantity += 1;
              setTotal((prev) => prev + newCart[ind].price);
              localStorage.setItem("cart", JSON.stringify(newCart));
              return newCart;
            });
          };

          const handleDecrement = () => {
            setCart((prev) => {
              const newCart = [...prev];
              if (newCart[ind].quantity === 1) {
                setTotal((prev) => prev - newCart[ind].price);
                localStorage.setItem("cart", JSON.stringify(newCart.filter((item, index) => index !== ind)))
                return newCart.filter((item, index) => index !== ind);
              }
              newCart[ind].quantity -= 1;
              setTotal((prev) => prev - newCart[ind].price);
              return newCart;
            });
          };

          return (
            <div key={ind} className="flex items-center m-6 p-6 border-b-2 border-dark ">
              <div id="product-details" className="flex gap-5 items-center">
                <div className="product-image">
                  <Image
                    src={`/images/${item.image_url}`}
                    alt="product"
                    width={100}
                    height={200}
                  />
                </div>

                <div id="name-price">
                  <h1 className="text-2xl font-bold">{item.name}</h1>
                  <p className="text-md text-gray-600">Origin: Ethiopia</p>

                  <div className="flex items-center justify-between mt-2 gap-5">
                    <button
                      onClick={handleDecrement}
                      className="
                                      p-5 py-1 w-fit
                                      bg-dark hover:bg-primary text-primary hover:text-dark
                                      border border-black 
                                      rounded-md"
                    >
                      -
                    </button>

                    <p className="text-md font-bold"> {item.quantity} </p>

                    <button
                      onClick={handleIncrement}
                      className="
                                      p-5 py-1 w-fit
                                      bg-dark hover:bg-primary text-primary hover:text-dark
                                      border border-black 
                                      rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <AnimatePresence>
          {requestSubmitted && <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="py-2 px-4 bg-green-200 text-green-700 rounded-md">
            Your sample request has been submitted! We'll contact you shortly.
          </motion.p>}
        </AnimatePresence>

        <button
          onClick={(e) => {e.preventDefault(); setRequestSubmitted(true); setTimeout(() => {setCart([]); setTotal(0); localStorage.setItem("cart", JSON.stringify([])); setRequestSubmitted(false);}, 3000);}}
          className="
                    p-10 py-3 m-12 w-fit
                    bg-primary hover:bg-dark text-dark hover:text-primary
                    border border-black 
                    rounded-md"
        > REQUEST SAMPLES </button>
      </div>
    </div>
  );
};

export default CartItems;
