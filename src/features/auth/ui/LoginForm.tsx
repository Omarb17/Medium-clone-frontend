"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography } from "@mui/material";

import { authApi } from "../api/authApi";
import { useAuthStore } from "../model/authStore";

export default function LoginForm() {
  const router = useRouter();

  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await authApi.login({
        email,
        password,
      });

      setAuth(response.token, response.user);

      router.push("/");
    } catch (error) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h4">Sign in</Typography>

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        fullWidth
      />

      {error && <Typography color="error">{error}</Typography>}

      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </Button>
    </Box>
  );
}
