// pages/Patient.jsx
import React from "react";
import { Sidebar } from "../../utils/sidebar";
import {
  Notebook,
  LayoutDashboard,
  Bell,
  BriefcaseMedical,
  User,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, text: "Dashboard ", path: "/patient-dashboard" },
  { icon: BriefcaseMedical, text: "Manage Doctors", path: "/reports" },
  { icon: Notebook, text: "Medical Package", path: "/checkups" },

  { icon: Bell, text: "Notifications", path: "/reports" },

  { icon: User, text: "Profile", path: "/profile" },
];

const Hospital = () => {
  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      <div className="page-content">
        <p>This is the Hospital page.</p>
      </div>
    </div>
  );
};

export default Hospital;
