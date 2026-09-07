"use client";
import Sidebar from "@/src/widgets/Sidebar";
import Navbar from "../../../widgets/Navbar";
import { useState } from "react";
import WelcomeOffer from "@/src/widgets/WelcomeOffer";
import { StoriesList } from "../widgets/StoriesList";

const HomePage = () => {
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
        hasSidebarButton={true}
        hasSearchBar={true}
        isWelcomePage={false}
      />
      <Sidebar open={open} />
      <WelcomeOffer />
      <StoriesList />
    </>
  );
};

export default HomePage;
