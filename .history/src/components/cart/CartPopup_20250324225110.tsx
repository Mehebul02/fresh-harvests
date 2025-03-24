import { FC } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '@/redux/features/cart/cartSlice'; // Add this path according to your cart actions
import Link from 'next/link';

type CartPopupProps = {
  cartItems: any[];
  totalQuantity: number;
  handleClose: () => void;
};

const CartPopup: FC<CartPopupProps> = ({ cartItems, totalQuantity, handleClose }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id)); // Assuming removeFromCart is an action in your cart slice
  };

  return (
    <div className="absolute top-16 right-0 w-64 bg-white shadow-lg rounded-md p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Your Cart ({totalQuantity})</h2>
        <button onClick={handleClose} className="text-gray-500">X</button>
      </div>
      <div className="mt-4 space-y-3">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item: any) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                <p className="ml-2 text-sm">{item.name}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="mt-4">
        <Link href="/cart" className="w-full block text-center text-white bg-green-500 py-2 rounded-md">
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default CartPopup;
