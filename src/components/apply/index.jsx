import React, { useState } from "react";
import axios from "axios";
import "./apply.css"; // Updated styles

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSuccessMessage("");
  //   setErrorMessage("");

  //   try {
  //     await axios.post("https://your-backend-endpoint/api/franchise-details", formData);
  //     setSuccessMessage("Form submitted successfully!");
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       phone: "",
  //       email: "",
  //       pinCode: "",
  //       area: "",
  //       propertyType: "",
  //       openingDate: ""
  //     });
  //   } catch (error) {
  //     setErrorMessage("There was an error submitting the form. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
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
    <div id="apply" className="franchise-details-form-container">
      <div className="franchise-info">
        <h2>Get Franchise Details</h2>
        <p>Fill out the form and our team will contact you!</p>
      </div>
      <form onSubmit={handleSubmit} className="franchise-details-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Pin Code</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Area in sq. ft.</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">-</option>
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        <div className="form-group">
          <label>When are you planning to open your store?</label>
          <select
            name="openingDate"
            value={formData.openingDate}
            onChange={handleChange}
            required
          >
            <option value="">-</option>
            <option value="immediately">Immediately</option>
            <option value="1-3-months">1-3 Months</option>
            <option value="3-6-months">3-6 Months</option>
            <option value="6-12-months">6-12 Months</option>
          </select>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default FranchiseDetailsForm;
