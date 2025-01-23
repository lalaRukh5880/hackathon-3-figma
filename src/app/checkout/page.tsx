'use client';

import { useContext, useState } from "react";
import { CartContext } from "@/lib/CartContext";
import Image from "next/image";

const CheckoutPage = () => {
  const { cartItems, dispatch } = useContext(CartContext); // Access cart items and dispatch
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Track order success

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    setIsOrderPlaced(true); // Mark the order as placed
    dispatch({ type: "CLEAR_CART" }); // Clear the cart
  };

  if (cartItems.length === 0 && !isOrderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <p className="text-lg">Your cart is empty.</p>
      </div>
    );
  }

  if (isOrderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
        <p className="text-lg">Your order has been placed successfully.</p>
        <p className="text-gray-600 mt-4">
          Thank you for shopping with us. We&apos;ll process your order soon.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-4 mb-4">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <div className="flex-grow">
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">
                  Subtotal: ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-lg">
            Total: ${calculateTotal()}
          </div>
        </div>

        {/* Billing Details */}
        <div>
          <h2 className="text-xl font-bold mb-4">Billing Details</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="mb-4">
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                className="border w-full px-3 py-2 rounded"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Email Address</label>
              <input
                type="email"
                className="border w-full px-3 py-2 rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Phone Number</label>
              <input
                type="text"
                className="border w-full px-3 py-2 rounded"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium">Address</label>
              <textarea
                className="border w-full px-3 py-2 rounded"
                rows={3}
                placeholder="Enter your address"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block font-medium">Payment Method</label>
              <select className="border w-full px-3 py-2 rounded" required>
                <option value="cod">Cash on Delivery (COD)</option>
                <option value="credit_card">Credit Card</option>
                
              </select>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
