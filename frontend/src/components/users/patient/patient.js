// pages/Patient.jsx
import React from "react";
import { Sidebar } from "../../utils/sidebar";
import {
  LayoutDashboard,
  BookOpenCheck,
  Heart,
  ClipboardPenLine,
  User,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, text: "Dashboard", path: "/patient-dashboard" },

  {
    icon: BookOpenCheck,
    text: "Appointments and online consultation",
    path: "/prescriptions",
  },

  { icon: ClipboardPenLine, text: "Visa Support", path: "/checkups" },
  {
    icon: ClipboardPenLine,
    text: "Book Ticket/ Accomodation",
    path: "/checkups",
  },

  { icon: ClipboardPenLine, text: "Reports and documents", path: "/checkups" },

  { icon: Heart, text: "Wishlist of Treatment Packages", path: "/reports" },
  { icon: User, text: "Profile", path: "/profile" },
];

const Patient = () => {
  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      <div className="page-content">
        <p>This is the Patient page.</p>
      </div>
    </div>
  );
};

export default Patient;
