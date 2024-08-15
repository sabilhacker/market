import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComment } from "react-icons/fa";
import "./contactus.css"; // Updated styles

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
    <>
    <div id ="contact-us-section"  className="contact-us-section">
  <div className="contact-us-container">
    <div className="contact-info">
      <h2>Contact Us</h2>
      <p className="contact-intro">We would love to hear from you! Whether you have a question, concern, or just want to say hello, feel free to reach out.</p>
      <div className="contact-details">
        <p><FaPhone /> Phone: +123 456 789</p>
        <p><FaEnvelope /> Email: info@example.com</p>
        <p> Address: 123 Market Street, City, Country</p>
      </div>
    </div>
    <form onSubmit={handleSubmit} className="contact-us-form">
      <div className="form-group">
        <label htmlFor="name"><FaUser /> Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
          placeholder="Your Name"
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email"><FaEnvelope /> Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
          placeholder="Your Email"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone"><FaPhone /> Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? "input-error" : ""}
          placeholder="Your Phone Number"
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message"><FaComment /> Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "input-error" : ""}
          placeholder="Your Message"
        />
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-submit">
        Submit
      </button>
    </form>
  </div>
</div>
</>

  );
};

export default ContactUs;
