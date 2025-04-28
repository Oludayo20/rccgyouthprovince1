import React from "react";
import { BiMapPin } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactForm: React.FC = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-start justify-between w-full p-6">
      {/* Left Side - Contact Info */}
      <div className="w-full lg:w-[50%] space-y-8">
        {/* Email */}
        <div className="flex flex-col items-start space-y-4 text-[#222222]">
          <MdOutlineMailOutline className="text-gray-500" size={24} />
          <h3 className="text-lg font-medium">Email</h3>
          <p className="text-gray-500">lekeadeboye@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-start space-y-4 text-[#222222]">
          <BsTelephone className="text-gray-500" size={24} />
          <h3 className="text-lg font-medium">Phone number</h3>
          <p className="text-gray-500">0801234567890</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-start space-y-4 text-[#222222]">
          <BiMapPin className="text-gray-500" size={24} />
          <h3 className="text-lg font-medium">Address</h3>
          <p className="text-gray-500">Redemption city Lagos-Ibadan Express</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-[50%] bg-white border border-gray-300 rounded-xl p-6">
        <form className="space-y-4">
          {/* First Name */}
          <div>
            <label className="text-gray-600 text-sm font-medium">
              FIRST NAME
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-gray-600 text-sm font-medium">
              LAST NAME
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-600 text-sm font-medium">EMAIL</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-600 text-sm font-medium">
              PHONE NUMBER
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-600 text-sm font-medium">MESSAGE</label>
            <textarea
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-medium py-3 rounded-full hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
