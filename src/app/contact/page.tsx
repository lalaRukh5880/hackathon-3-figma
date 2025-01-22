import React from 'react'
import Common from '@/Components/Common'

const page = () => {
  return (
    <div>
         <Common title="Contact" subtitle="Contact" />

         <div className="flex items-center justify-center min-h-screen  mt-10 mb-10">
        <header className="bg-cover bg-center h-48 flex items-center justify-center" style={{ backgroundImage: 'url(/Readmore/bg-image.png)' }}></header>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        
        {/* Input Fields */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
              />
              <span className="ml-2 text-gray-700">Remember me?</span>
            </label>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="border-t border-gray-300 w-full"></span>
          <span className="px-4 text-gray-500">OR</span>
          <span className="border-t border-gray-300 w-full"></span>
        </div>

        {/* Sign Up Options */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
            <img
              src="others/Google.png"
              alt="Google"
              width={20}
              height={20}
              
            />
            <span className="font-medium text-gray-700 space-x-0"> Sign Up with Google</span>
          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
            <img
              src="others/Apple.png"
              alt="Apple"
              width={20}
              height={20}
              
            />
            <span className="font-medium text-gray-700">Sign Up with Apple</span>
          </button>
        </div>
      </div>
    </div>
      
    </div>
    
  )
}

export default page
