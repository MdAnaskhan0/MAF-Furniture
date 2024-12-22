import React from "react";
import { FaUser, FaShoppingCart, FaHeart, FaCog, FaEdit, FaArrowRight } from "react-icons/fa";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      {/* Header */}
      <header className="bg-white shadow-lg py-6 px-8 rounded-lg mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
            <p className="text-gray-600">Welcome back, <span className="font-medium">John Doe</span>!</p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
            <FaEdit /> Edit Profile
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* User Profile */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
            <FaUser className="text-blue-500" /> Profile Information
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Name:</strong> John Doe</li>
            <li><strong>Email:</strong> john.doe@example.com</li>
            <li><strong>Phone:</strong> +123 456 7890</li>
            <li><strong>Address:</strong> 123 Main St, Anytown, USA</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Update Info</button>
        </section>

        {/* Order History */}
        <section className="bg-white shadow-lg p-6 rounded-lg xl:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
            <FaShoppingCart className="text-green-500" /> Order History
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 py-3 px-4">Order ID</th>
                  <th className="border-b-2 py-3 px-4">Date</th>
                  <th className="border-b-2 py-3 px-4">Status</th>
                  <th className="border-b-2 py-3 px-4">Total</th>
                  <th className="border-b-2 py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 px-4">#12345</td>
                  <td className="py-3 px-4">2023-12-01</td>
                  <td className="py-3 px-4 text-green-600">Delivered</td>
                  <td className="py-3 px-4">$123.45</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-500 hover:underline flex items-center gap-1">
                      View Details <FaArrowRight />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">#67890</td>
                  <td className="py-3 px-4">2023-11-25</td>
                  <td className="py-3 px-4 text-yellow-600">Processing</td>
                  <td className="py-3 px-4">$89.99</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-500 hover:underline flex items-center gap-1">
                      View Details <FaArrowRight />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Wishlist */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
            <FaHeart className="text-red-500" /> Wishlist
          </h2>
          <ul className="text-gray-600 space-y-3">
            <li className="flex justify-between items-center">
              <span>Product 1</span>
              <button className="text-blue-500 hover:underline">View</button>
            </li>
            <li className="flex justify-between items-center">
              <span>Product 2</span>
              <button className="text-blue-500 hover:underline">View</button>
            </li>
          </ul>
        </section>

        {/* Account Settings */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
            <FaCog className="text-gray-500" /> Account Settings
          </h2>
          <ul className="text-gray-600 space-y-3">
            <li><button className="text-blue-500 hover:underline">Change Password</button></li>
            <li><button className="text-blue-500 hover:underline">Manage Payment Methods</button></li>
            <li><button className="text-blue-500 hover:underline">Delete Account</button></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
