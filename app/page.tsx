"use client";

import HomePage from "@/src/_pages/Home";
import WelcomePage from "@/src/_pages/Welcome";
import { useAuthStore } from "@/src/features/auth/model/authStore";

export default function Home() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const isInitialized = useAuthStore((state) => state.isInitialized);

  if (!isInitialized) {
    return null;
  }

  if (!isAuthenticated) {
    return <WelcomePage />;
  }

  return <HomePage />;
}
