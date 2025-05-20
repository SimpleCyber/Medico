// components/Auth/SignUp.js
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const SignUp = ({ switchMode }) => {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await setDoc(doc(db, "profiles", result.user.uid), {
        name: formData.name,
        email: formData.email,
      });
      alert("Account Created Successfully!");
      switchMode(); // Switch to login after signup
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="form-group">
        <label>Full Name</label>
        <div className="input-wrapper glass-effect">
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
        {loading ? <Loader2 className="spinner" size={20} /> : <>Create Account <ArrowRight size={18} /></>}
      </button>

      <div className="auth-switch">
        <p>
          Already have an account? <button onClick={switchMode}>Sign In</button>
        </p>
      </div>

      <p className="terms">
        By signing up, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
      </p>
    </form>
  );
};

export default SignUp;
