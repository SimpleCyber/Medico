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
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const profileRef = doc(db, "profiles", user.uid);
      const profileSnap = await getDoc(profileRef);

      if (!profileSnap.exists()) {
        const userType = prompt("Select user type: Hospital or Patient");
        if (!userType || !["Hospital", "Patient"].includes(userType)) {
          alert("Invalid or missing user type. Please try again.");
          return;
        }

        await setDoc(profileRef, {
          email: user.email,
          name: user.email.split("@")[0],
          userType: userType,
        });
      }

      if (profileSnap.exists()) {
        const data = profileSnap.data();
        if (data.userType === "Patient") navigate("/patient");
        else if (data.userType === "Hospital") navigate("/hospital");
        else if (data.userType === "Doctor") navigate("/doctor");
        else navigate("/");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => setIsLogin(!isLogin);

  return (
    <div className="flex h-screen">
      <LeftImage />
      <div className="auth-container flex-1 flex items-center justify-center p-4">
        <div className="auth-blob-1"></div>
        <div className="auth-blob-2"></div>

        <div className="auth-card glass-effect">
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
                : "Join the best Hospital Services online"}
            </p>
          </div>

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
            <span>or continue with Google</span>
          </div>

          {isLogin ? (
            <SignIn switchMode={switchMode} />
          ) : (
            <SignUp switchMode={switchMode} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
