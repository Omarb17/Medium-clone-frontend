"use client";
import Sidebar from "@/src/widgets/Sidebar";
import Navbar from "../../../widgets/Navbar";
import { useState } from "react";
import WelcomeOffer from "@/src/widgets/WelcomeOffer";

export default function HomePage() {
  const [open, setOpen] = useState(true);

  const handleSidebarOpen = () => {
    setOpen(true);
  };

  const handleNavbarClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar
        handleSidebarSwitch={open ? handleNavbarClose : handleSidebarOpen}
      />
      <Sidebar open={open} />
      <WelcomeOffer />

      <h1>Home</h1>
    </>
  );
}
