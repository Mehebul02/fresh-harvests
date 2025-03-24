// 'use client'
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart, updateQuantity } from "@/redux/features/cart/cartSlice";
// import { IProduct } from "@/types";
// import Image from "next/image";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const { cartItems } = useSelector((state: any) => state.cart); // Accessing cartItems from the store

//   console.log("Item ase", cartItems);

//   // Handle quantity change
//   const handleQuantityChange = (id: string, quantity: number) => {
//     if (quantity > 0) {
//       dispatch(updateQuantity({ id, quantity }));
//     }
//   };

//   // Handle remove item from cart
//   const handleRemoveFromCart = (id: string) => {
//     dispatch(removeFromCart(id));
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map((item: IProduct & { quantity: number }) => (
//             <div key={item.id} className="cart-item">
//               <Image src={item.images} alt={item.productName} />
//               <div className="item-details">
//                 <h3>{item.productName}</h3>
//                 <p>{item.price}</p>
//                 <div className="quantity-controls">
//                   <button
//                     onClick={() =>
//                       handleQuantityChange(item.id, item.quantity - 1)
//                     }
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     onClick={() =>
//                       handleQuantityChange(item.id, item.quantity + 1)
//                     }
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button onClick={() => handleRemoveFromCart(item.id)}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
// components/CartPopup.tsx
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '@/redux/features/cart/cartSlice';

const Cart = ({ isCartOpen, setIsCartOpen }) => {
    const dispatch = useDispatch();
      const { cartItems } = useSelector((state: any) => state.cart); // Accessing cartItems from the store
    
      console.log("Item ase", cartItems);
    
      // Handle quantity change
      const handleQuantityChange = (id: string, quantity: number) => {
        if (quantity > 0) {
          dispatch(updateQuantity({ id, quantity }));
        }
      };
    
      // Handle remove item from cart
      const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromCart(id));
      };

  return (
    <div
      className={`fixed top-0 right-0 z-50 bg-white w-72 h-full p-4 shadow-lg transition-transform ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item: any) => (
              <li key={item.id} className="flex justify-between items-center py-2 border-b">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <span>Total Quantity: {totalQuantity}</span>
            <span>Total Price: ${totalPrice}</span>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsCartOpen(false)}
        className="absolute top-4 right-4 text-2xl"
      >
        X
      </button>
    </div>
  );
};

export default Cart;
