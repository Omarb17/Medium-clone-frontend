"use client";
import Sidebar from "@/src/widgets/Sidebar";
import Navbar from "../../../widgets/Navbar";
import { useState } from "react";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  const handleSidebarOpen = () => {
    setOpen(true);
  };

  const handleNavbarClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar handleSidebarOpen={handleSidebarOpen} />
      <Sidebar handleNavbarClose={handleNavbarClose} open={open} />
      <h1>Home</h1>
    </>
  );
}
