"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProfileSettings() {
  const user = useSelector((state) => state.user.user);

  const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    mobile: "",
    businessname: "",
    businessID: "",
  });

  // Initialize form data from Redux store
  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        middlename: user.middlename || "",
        email: user.email || "",
        mobile: user.mobile || "",
        businessname: user?.businessname || "",
        businessID: user.uuid || "",
      });
    }
  }, [user]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your API call logic here
    console.log("Submitting form data:", formData);
  };

  // Show loading state if user data is not available yet
  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className=" bg-white rounded-xl py-[42px] flex justify-center items-center">
      <div className="max-w-[586px] w-full px-4">
        <h2 className="text-xl font-bold mb-6">My Profile</h2>

        {/* Profile Avatar */}
        <div className="flex items-center mb-8">
          <div className="w-[50px] h-[50px] bg-[#9D122F] rounded-full flex items-center justify-center text-white font-semibold text-[22px]">
            {getInitials(formData.firstname, formData.lastname)}
          </div>
          <div className="ml-4">
            <h3 className="font-medium">
              {formData.firstname} {formData.middlename} {formData.lastname}
            </h3>
            <p className="text-gray-600">{formData.email}</p>
          </div>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                value={formData.firstname}
                onChange={(e) => handleInputChange("firstname", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                value={formData.lastname}
                onChange={(e) => handleInputChange("lastname", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder:text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md  placeholder:!text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Business Name
              </label>
              <input
                type="text"
                id="business_name"
                value={formData?.businessname}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md  placeholder:!text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Business ID
              </label>
              <input
                type="text"
                id="business_ID"
                value={formData.businessID}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md  placeholder:!text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#042656] hover:bg-blue-800 text-white font-medium py-4 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Changes
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}
