import { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert(`✅ Registration Successful! Welcome ${formData.name}`);
    console.log("Form Data:", formData);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Registration Form</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />

          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
            className="form-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="form-input"
          />

          <button type="submit" className="form-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
