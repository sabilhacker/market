import React, { useState } from "react";
import axios from "axios";

const FranchiseDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    pinCode: "",
    area: "",
    propertyType: "",
    openingDate: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
  
    try {
      const response = await axios.post("http://localhost:5000/api/franchise-details", formData);
      if (response.status === 200) {
        setSuccessMessage("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          pinCode: "",
          area: "",
          propertyType: "",
          openingDate: ""
        });
      } else {
        setErrorMessage("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      setErrorMessage("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div id="apply" className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-xl shadow-lg">
      <div className="text-left w-full max-w-2xl mb-8">
        <h2 className="text-3xl font-semibold text-green-700">Get Franchise Details</h2>
        <p className="text-lg text-gray-600 mt-4">Fill out the form and our team will contact you!</p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-lg font-medium text-green-700 mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-green-700 mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-green-700 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-green-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-green-700 mb-2">Pin Code</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-green-700 mb-2">Area in sq. ft.</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-green-700 mb-2">Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option value="">-</option>
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-green-700 mb-2">When are you planning to open your store?</label>
          <select
            name="openingDate"
            value={formData.openingDate}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option value="">-</option>
            <option value="immediately">Immediately</option>
            <option value="1-3-months">1-3 Months</option>
            <option value="3-6-months">3-6 Months</option>
            <option value="6-12-months">6-12 Months</option>
          </select>
        </div>

        <button type="submit" className="w-full p-4 text-xl text-white bg-green-700 rounded-md hover:bg-green-800 transition-colors" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {successMessage && <p className="text-green-700 text-lg mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 text-lg mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default FranchiseDetailsForm;
