"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuthStore } from "@/src/features/auth/model/authStore";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const isInitialized = useAuthStore((state) => state.isInitialized);

  const isStoryPage = pathname.startsWith("/stories/");

  if (!isInitialized) {
    return null;
  }

  if (!isAuthenticated) {
    return <>{children}</>;
  }

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

export default AppShell;
