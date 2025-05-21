// components/Auth/Auth.js
import React, { useState } from "react";
import "./AuthPages.css";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Chrome, ChevronLeft } from "lucide-react";

import SignIn from "./signin";
import SignUp from "./signup";
import LeftImage from "./leftimage";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    
    try {
      // Handle Google authentication
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const profileRef = doc(db, "profiles", user.uid);
      const profileSnap = await getDoc(profileRef);

      // Create profile if it doesn't exist
      if (!profileSnap.exists()) {
        const userType = prompt("Select user type: Hospital or Patient");
        
        if (!["Hospital", "Patient"].includes(userType)) {
          alert("Invalid or missing user type. Please try again.");
          return;
        }

        // Save new user profile
        await setDoc(profileRef, {
          email: user.email,
          name: user.email.split("@")[0],
          userType
        });
        
        // Navigate based on user type
        navigateByUserType(userType);
        return;
      }

      // Navigate based on existing user type
      if (profileSnap.exists()) {
        navigateByUserType(profileSnap.data().userType);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to navigate based on user type
  const navigateByUserType = (userType) => {
    switch (userType) {
      case "Patient": 
        navigate("/patient");
        break;
      case "Hospital": 
        navigate("/hospital");
        break;
      case "Doctor": 
        navigate("/doctor");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="flex h-screen">
      <LeftImage />
      
      <div className="auth-container flex-1 flex items-center justify-center p-4">
        <div className="auth-blob-1"></div>
        <div className="auth-blob-2"></div>

        <div className="auth-card glass-effect">
          {/* Header */}
          <div className="auth-header">
            <div className="logo-section">
              <ChevronLeft 
                className="back-arrow" 
                size={40} 
                onClick={() => navigate(-1)} 
              />
              <h1>Medico</h1>
            </div>
            <p className="welcome-text">
              {isLogin 
                ? "Welcome back, User!" 
                : "Join the best Hospital Services online"
              }
            </p>
          </div>

          {/* Google Authentication */}
          <div className="social-auth">
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 disabled:opacity-50"
            >
              <Chrome size={20} />
              <span>{loading ? "Loading..." : "Continue with Google"}</span>
            </button>
          </div>

          <div className="divider">
            <span>or continue with Email</span>
          </div>

          {/* Sign In/Sign Up Forms */}
          {isLogin 
            ? <SignIn switchMode={() => setIsLogin(false)} /> 
            : <SignUp switchMode={() => setIsLogin(true)} />
          }
        </div>
      </div>
    </div>
  );
};

export default Auth;