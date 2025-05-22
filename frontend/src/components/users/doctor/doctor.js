// pages/Patient.jsx
import React from "react";
import { Sidebar } from "../../utils/sidebar";
import {
  Home,
  Notebook,
  LayoutDashboard,
  Bell,
  BriefcaseMedical,
  User,
} from "lucide-react";

const navItems = [
  { icon: Home, text: "Doctor", path: "/" },
  { icon: LayoutDashboard, text: "Dashboard", path: "/patient-dashboard" },

  { icon: Notebook, text: "Manage Patients / consulation", path: "/checkups" },
  { icon: BriefcaseMedical, text: "Create Apointments", path: "/reports" },
  { icon: BriefcaseMedical, text: "Calender", path: "/reports" },

  { icon: Bell, text: "Notifications", path: "/reports" },
  { icon: User, text: "Profile", path: "/profile" },
];

const Doctor = () => {
  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      <div className="page-content">
        <p>This is the Doctor page.</p>
      </div>
    </div>
  );
};

export default Doctor;
