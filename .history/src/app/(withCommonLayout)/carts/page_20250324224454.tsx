import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/features/cart/cartSlice";
import { IProduct } from "@/types";
import Image from "next/image";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: any) => state.cart); // Accessing cartItems from the store

  console.log("Item ase", cart);

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
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item: IProduct & { quantity: number }) => (
            <div key={item.id} className="cart-item">
              <Image src={item.images} alt={item.productName} />
              <div className="item-details">
                <h3>{item.productName}</h3>
                <p>{item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
