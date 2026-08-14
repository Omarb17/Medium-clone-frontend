"use client";
import Sidebar from "@/src/widgets/Sidebar";
import Navbar from "../../../widgets/Navbar";
import { useState } from "react";

export default function HomePage() {
  const [open, setOpen] = useState(true);

  const handleSidebarOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar handleSidebarOpen={handleSidebarOpen} />
      <Sidebar />
      <h1>Home</h1>
    </>
  );
}
