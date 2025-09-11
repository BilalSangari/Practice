import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");
  const [tiltStyle, setTiltStyle] = useState({});

  // --- Handlers --- //

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "password") calculatePasswordStrength(value);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!/^\d{9,15}$/.test(formData.number)) newErrors.number = "Phone 9-15 digits";
    if (formData.password.length < 6) newErrors.password = "Password min 6 chars";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRegister();
    if (Object.keys(validationErrors).length > 0) setErrors(validationErrors);
    else {
      setErrors({});
      alert(`🎉 Welcome, ${formData.name}!`);
      console.log(formData);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert("Please enter email and password");
      return;
    }
    alert(`✅ Logged in as ${loginData.email}`);
    console.log(loginData);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    setTiltStyle({
      transform: `rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ transform: "rotateY(0deg) rotateX(0deg)" });
  };

  // --- Render --- //

  return (
    <div className="form-container">
      <div className="theme-toggle">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </div>

      <div
        className="form-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={tiltStyle}
      >
        {/* --- Sliding Tab Toggle --- */}
        <div className="tab-toggle">
          <span
            className={`tab ${activeTab === "signup" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </span>
          <span
            className={`tab ${activeTab === "login" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </span>
          <div
            className={`tab-slider ${activeTab === "signup" ? "slide-left" : "slide-right"}`}
          ></div>
        </div>

        {activeTab === "signup" ? (
          <>
            <h1 className="form-title">Create Your Account</h1>
            <p className="form-subtitle">Fast, secure, and beautiful experience 🚀</p>
            <form className="form" onSubmit={handleRegisterSubmit}>
              {["name", "email", "number"].map((field) => (
                <div className="form-group" key={field}>
                  <input
                    type={field === "email" ? "email" : field === "number" ? "number" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`form-input ${errors[field] ? "error" : ""}`}
                    placeholder=" "
                  />
                  <label className="floating-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {errors[field] && <span className="error-text">{errors[field]}</span>}
                </div>
              ))}

              {["password", "confirmPassword"].map((field) => (
                <div className="form-group password-group" key={field}>
                  <input
                    type={field === "password" ? (showPassword ? "text" : "password") : "password"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`form-input ${errors[field] ? "error" : ""}`}
                    placeholder=" "
                  />
                  <label className="floating-label">
                    {field === "confirmPassword" ? "Confirm Password" : "Password"}
                  </label>
                  <span className="password-toggle" onClick={toggleShowPassword}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </span>
                  {errors[field] && <span className="error-text">{errors[field]}</span>}
                  {field === "password" && formData.password && (
                    <div className="password-strength">
                      <div className={`strength-bar strength-${passwordStrength}`}></div>
                    </div>
                  )}
                </div>
              ))}

              <button type="submit" className="form-button">Sign Up</button>
            </form>
          </>
        ) : (
          <>
            <h1 className="form-title">Welcome Back</h1>
            <p className="form-subtitle">Enter your credentials to login</p>
            <form className="form" onSubmit={handleLoginSubmit}>
              {["email", "password"].map((field) => (
                <div className="form-group password-group" key={field}>
                  <input
                    type={field === "password" ? (showPassword ? "text" : "password") : "email"}
                    name={field}
                    value={loginData[field]}
                    onChange={handleLoginChange}
                    className="form-input"
                    placeholder=" "
                  />
                  <label className="floating-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  {field === "password" && (
                    <span className="password-toggle" onClick={toggleShowPassword}>
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  )}
                </div>
              ))}
              <button type="submit" className="form-button">Login</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
