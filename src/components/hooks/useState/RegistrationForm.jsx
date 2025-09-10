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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!/^\d{9,15}$/.test(formData.number))
      newErrors.number = "Enter a valid phone number (9–15 digits).";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords don’t match.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert(`🎉 Welcome, ${formData.name}! Registration successful ✅`);
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Create your account</h2>
        <p className="form-subtitle">Fast, simple, secure.</p>

        <form onSubmit={handleSubmit} className="form">
          {["name", "email", "number", "password", "confirmPassword"].map(
            (field) => (
              <div className="form-group" key={field}>
                <input
                  type={
                    field.includes("password")
                      ? "password"
                      : field === "email"
                      ? "email"
                      : field === "number"
                      ? "number"
                      : "text"
                  }
                  name={field}
                  placeholder={
                    field === "confirmPassword"
                      ? "Confirm Password"
                      : field.charAt(0).toUpperCase() + field.slice(1)
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  className={`form-input ${errors[field] ? "error" : ""}`}
                />
                {errors[field] && (
                  <p className="error-text">{errors[field]}</p>
                )}
              </div>
            )
          )}

          <button type="submit" className="form-button">
            Sign Up
          </button>

          <p className="form-footer">
            Already have an account? <a href="#">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
