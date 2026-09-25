"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";

interface AppShellProps {
  children: React.ReactNode;
}

const Appshell = ({ children }: AppShellProps) => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const isStoryPage = pathname.startsWith("/stories/");

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
        hasSidebarButton={!isStoryPage}
        hasSearchBar={true}
        isWelcomePage={false}
      />
      {!isStoryPage && <Sidebar open={open} />}

      <Box
        sx={{
          pt: "65px",
          ml: !isStoryPage && open ? "240px" : "0px",
          transition: "margin-left 0.2s",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Appshell;
