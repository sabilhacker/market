import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email address is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/contact", formData);
        if (response.status === 200) {
          setSuccessMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
          });
          setErrors({});
        } else {
          setErrorMessage("There was an error sending your message. Please try again.");
        }
      } catch (error) {
        setErrorMessage("There was an error sending your message. Please try again.");
      }
    }
  };
  
  return (
    <div id="contact-us-section" className="flex justify-center items-center py-12 px-4 bg-gray-100">
      <div className="flex flex-col lg:flex-row max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden w-full">
        <div className="flex-1 p-10 bg-gray-100 flex flex-col justify-center">
          <h2 className="text-gray-800 mb-5 text-2xl">Contact Us</h2>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">We would love to hear from you! Whether you have a question, concern, or just want to say hello, feel free to reach out.</p>
          <div className="text-gray-700 text-sm space-y-4">
            <p className="flex items-center"><FaPhone className="text-green-600 mr-2" /> Phone: +123 456 789</p>
            <p className="flex items-center"><FaEnvelope className="text-green-600 mr-2" /> Email: info@example.com</p>
            <p className="flex items-center"> Address: 123 Market Street, City, Country</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 p-10 bg-white">
          <div className="mb-5">
            <label htmlFor="name" className="text-green-600 block mb-2 font-bold text-lg flex items-center">
              <FaUser className="mr-2" /> Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:border-green-600 ${errors.name ? 'border-red-600' : 'border-gray-300'}`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="text-green-600 block mb-2 font-bold text-lg flex items-center">
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:border-green-600 ${errors.email ? 'border-red-600' : 'border-gray-300'}`}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="text-green-600 block mb-2 font-bold text-lg flex items-center">
              <FaPhone className="mr-2" /> Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:border-green-600 ${errors.phone ? 'border-red-600' : 'border-gray-300'}`}
              placeholder="Your Phone Number"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="text-green-600 block mb-2 font-bold text-lg flex items-center">
              <FaComment className="mr-2" /> Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:border-green-600 ${errors.message ? 'border-red-600' : 'border-gray-300'}`}
              placeholder="Your Message"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="w-full bg-green-600 text-white p-4 rounded-md font-bold hover:bg-green-700 transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
