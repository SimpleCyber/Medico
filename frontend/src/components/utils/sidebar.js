// utils/sidebar.jsx
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  HeartPulse,
  Loader,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../../firebase";

const SidebarItem = ({ icon: Icon, text, active, onClick }) => (
  <li className={`nav-item ${active ? "active" : ""}`} onClick={onClick}>
    <Icon className="nav-icon" />
    <span className="nav-text">{text}</span>
  </li>
);

const ProfileSection = ({ userData, isOpen, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="profile-info-sidebar">
      {loading ? (
        <div className="loading-state">
          <Loader className="animate-spin" />
        </div>
      ) : (
        <>
          <img
            src={"https://github.com/shadcn.png"}
            alt="Profile"
            className="profile-image-sidebar"
            onError={(e) => {
              e.currentTarget.src = "https://github.com/shadcn.png";
            }}
          />
          <div className="profile-details-sidebar">
            <h3 className="profile-name">{userData?.name || "User"}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export function Sidebar({ navItems = [] }) {
  const [isOpen, setIsOpen] = useState(true);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.currentUser) {
        setLoading(false);
        return;
      }

      try {
        const db = getFirestore();
        const docRef = doc(db, "profiles", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setUserData(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="s-bar">
        <div className="sidebar-header">
          <div className="logo cursor-pointer">
            <HeartPulse className="logo-icon" />
            <span className={isOpen ? "logo-text" : "hidden"}
              onClick={() => {
                    navigate("/");
                  }}
            >Medico</span>
          </div>

          <button
            className="sidebar-toggle"
            onClick={toggleSidebar}
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? (
              <ChevronLeft size={24} />
            ) : (
              <HeartPulse className="logo-icon" size={24} />
            )}
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <SidebarItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  active={isActive}
                  onClick={() => {
                    if (loading && item.text === "Dashboard") return;
                    navigate(item.path);
                  }}
                />
              );
            })}
          </ul>
        </nav>
      </div>

      <ProfileSection userData={userData} isOpen={isOpen} loading={loading} />
    </div>
  );
}
