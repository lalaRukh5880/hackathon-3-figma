"use client";
import React, { useState, useEffect } from 'react';
import { Food } from '@/types/foods';
import { getCartItems } from '../actions/actions'
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';

const countries = ["Pakistan"];
const cities: Record<string, string[]> = {
  Pakistan: [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Peshawar",
    "Quetta", "Multan", "Sialkot", "Gujranwala", "Sargodha", "Bahawalpur",
    "Sukkur", "Larkana", "Sheikhupura", "Jhang", "Gujrat", "Mardan",
    "Kasur", "Dera Ghazi Khan" , "Dadu"
  ]
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    city: '',
    zipCode: '',
    address1: '',
    address2: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    country: false,
    city: false,
    zipCode: false,
    address1: false,
     address2: false,
  });

  const router = useRouter();

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const calculatedTotal = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
    return total - discount; // Apply discount here
  };

  const validateForm = () => {
    const errors = {
      firstName: !userDetails.firstName,
      lastName: !userDetails.lastName,
      email: !userDetails.email,
      phone: !userDetails.phone,
      country: !userDetails.country,
      city: !userDetails.city,
      zipCode: !userDetails.zipCode,
      address1: !userDetails.address1,
    address2: !userDetails.address2,
    };
    
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  
  const handleProceedToShipping = async () => {
    if (!validateForm()) {
   localStorage.removeItem("appliedDiscount"); // Clear discount if form is invalid
   Swal.fire({
     icon: 'error',
     title: 'Error',
     text: 'Please fill in all the required fields.',
   });
   return;
 }

 // Show a loading message before proceeding
 Swal.fire({
   title: 'Please wait a moment...',
   text: 'Processing your request...',
   allowOutsideClick: false,
   didOpen: () => {
     Swal.showLoading();
   }
 });

 // Simulate a short delay for a better UX
 setTimeout(() => {
   Swal.fire({
     icon: 'success',
     title: 'Success!',
     text: 'Proceeding to shipping!',
   });
 }, 1500); // Adjust time as needed


  const orderData = {
   _type : 'order',
   firstName : userDetails.firstName,
   lastName : userDetails.lastName,
   email : userDetails.email,
   phone : userDetails.phone,
   company : userDetails.company,
   country : userDetails.country,
   city : userDetails.city,
   zipCode : userDetails.zipCode || "",
   address1 : userDetails.address1,
   address2 : userDetails.address2 || "",
   cartItems : cartItems.map((item) => ({
        _type:'reference',
         _ref : item._id
   })),
   total : calculatedTotal(),
   discount : discount,
   orderDate : new Date().toISOString()
  };
  try {
   await client.create(orderData);
   localStorage.removeItem("appliedDiscount");
  }catch(error){
   console.error('Failed to create order',error);
  
  }
 };
 


 
  // const handleProceedToShipping = async () => {
  //   if (!validateForm()) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Error',
  //       text: 'Please fill in all the required fields.',
  //     });
  //     return;
  //   }
  
  //   // Show a loading message before proceeding
  //   Swal.fire({
  //     title: 'Processing your order...',
  //     allowOutsideClick: false,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     }
  //   });
  
  //   const orderData = {
  //     _type: 'order',
  //     firstName: userDetails.firstName,
  //     lastName: userDetails.lastName,
  //     email: userDetails.email,
  //     phone: userDetails.phone,
  //     company: userDetails.company || "", // Optional field
  //     country: userDetails.country,
  //     city: userDetails.city,
  //     zipCode: userDetails.zipCode,
  //     address1: userDetails.address1,
  //     address2: userDetails.address2 || "", // Optional field
  //     cartItems: cartItems.map((item) => ({
  //       type: 'reference',
  //       ref: item._id
  //     })),
  //     total: calculatedTotal(),
  //     discount: discount,
  //     orderDate: new Date().toISOString(),
  //   };
  
  //   try {
  //     await client.create(orderData);
  //     localStorage.removeItem("appliedDiscount");
  
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Order Placed!',
  //       text: 'Your order has been successfully created!',
  //     });
  
  //     router.push('/order-confirmation'); // Redirect to confirmation page
  //   } catch (error) {
  //     console.error('Failed to create order', error);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Order Failed',
  //       text: 'Something went wrong. Please try again.',
  //     });
  //   }
  // };
  
  

  return (
    <div className="w-full mx-auto p-4 md:p-6 lg:p-8 bg-white">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className=" w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Side: Shipping Address */}
        <div className=" w-[70%] bg-white shadow-md rounded-lg p-6 flex-1">
          <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
          <div className='flex flex-row gap-2'>
            <div>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                name="company"
                value={userDetails.company}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
              <select
                name="city"
                value={userDetails.city}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
                disabled={!userDetails.country}
              >
                <option value="">Select City</option>
                {userDetails.country &&
                  (cities[userDetails.country] || []).map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
              </select>
              <input
                type="text"
                placeholder="Address Line 1"
                name="address1"
                value={userDetails.address1}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
              <select
                name="country"
                value={userDetails.country}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Zip Code"
                name="zipCode"
                value={userDetails.zipCode}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                name="address2"
                value={userDetails.address2}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border rounded outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-white shadow-md rounded-lg  p-4 lg:w-[30%]">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} className="flex items-center justify-between mb-4 border-b pb-2">
                <Image
                  src={urlFor(item.image).url()}
                  width={50}
                  height={50}
                  alt={item.name}
                  className="w-12 h-12 rounded-md"
                />
                <span className="flex-1 ml-4">{item.name}</span>
                <span>${(item.price * item.inventory).toFixed(2)}</span>
              </li>
            ))}
            <li className="flex justify-between pt-2">
              <span>Subtotal:</span>
              <span>${calculatedTotal().toFixed(2)}</span>
            </li>
            <li className="flex justify-between pt-2">
              <span>Discount:</span>
              <span>${discount.toFixed(2)}</span>
            </li>
            <li className="flex justify-between font-bold pt-2">
              <span>Total:</span>
              <span>${calculatedTotal().toFixed(2)}</span>
            </li>
          </ul>
          <button
            onClick={handleProceedToShipping}
            className="w-full mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Place Order
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => router.push('/cart')}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Back to Cart
        </button>
        <button
          onClick={handleProceedToShipping}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Proceed to Shipping
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;