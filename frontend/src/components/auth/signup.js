// components/Auth/SignUp.js
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const SignUp = ({ switchMode }) => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
    userType: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      
      const name = formData.email.split("@")[0];
      await setDoc(doc(db, "profiles", result.user.uid), {
        name: name,
        email: formData.email,
        userType:formData.userType,
      });
      alert("Account Created Successfully!");
      switchMode(); 
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="form-group">
        <label>User Type</label>
        <div className="input-wrapper glass-effect relative">
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-gray-600 placeholder-black border-none outline-none  appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-black">
              Select User Type
            </option>
            <option value="Hospital" className="text-black">
              Hospital
            </option>
            <option value="Patient" className="text-black">
              Patient
            </option>
          </select>

          {/* Optional dropdown icon */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <div className="input-wrapper glass-effect">
          <Mail size={18} />
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Password</label>
        <div className="input-wrapper glass-effect">
          <Lock size={18} />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className={`submit-btn ${loading ? "loading" : ""}`}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="spinner" size={20} />
        ) : (
          <>
            Create Account <ArrowRight size={18} />
          </>
        )}
      </button>

      <div className="auth-switch">
        <p>
          Already have an account? <button onClick={switchMode}>Sign In</button>
        </p>
      </div>

      <p className="terms">
        By signing up, you agree to our <a href="#terms">Terms of Service</a>{" "}
        and <a href="#privacy">Privacy Policy</a>
      </p>
    </form>
  );
};

export default SignUp;
