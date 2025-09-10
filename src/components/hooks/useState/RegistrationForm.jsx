import { useState, useEffect } from "react";
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
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") calculatePasswordStrength(value);
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email.";
    if (!/^\d{9,15}$/.test(formData.number))
      newErrors.number = "Phone number must be 9-15 digits.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) setErrors(validationErrors);
    else {
      setErrors({});
      alert(`🎉 Welcome, ${formData.name}!`);
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Create Your Account</h1>
        <p className="form-subtitle">Fast, safe & modern experience 🚀</p>

        <form className="form" onSubmit={handleSubmit}>
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
                {errors[field] && <span className="error-text">{errors[field]}</span>}

                {field === "password" && formData.password && (
                  <div className="password-strength">
                    <div
                      className={`strength-bar strength-${passwordStrength}`}
                    ></div>
                  </div>
                )}
              </div>
            )
          )}

          <button type="submit" className="form-button">
            Sign Up
          </button>

          <p className="form-footer">
            Already have an account? <a href="#">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
