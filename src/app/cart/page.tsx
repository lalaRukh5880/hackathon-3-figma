'use client';

import { useContext } from "react";
import { CartContext } from "../../lib/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  const router = useRouter();

  const incrementQuantity = (id: number) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const proceedToCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="rounded-md object-cover"
                />
                <div className="flex flex-col flex-grow">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right border-t pt-4">
            <h2 className="text-xl font-bold">Total: ${calculateTotal()}</h2>
            <button
              onClick={proceedToCheckout}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
