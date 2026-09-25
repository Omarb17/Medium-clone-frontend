"use client";

import { Box, Container, Typography } from "@mui/material";

import RegisterForm from "@/src/features/auth/ui/RegisterForm";

export default function RegisterPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          px: { xs: 3, md: 5 },
          py: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#242424",
            cursor: "pointer",
          }}
        >
          Medium Clone
        </Typography>
      </Box>

      {/* Form */}
      <Container
        maxWidth="sm"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: {
                xs: "2rem",
                md: "2.5rem",
              },
              fontWeight: 400,
              color: "#242424",
              mb: 1,
              textAlign: "center",
            }}
          >
            Join Medium Clone
          </Typography>

          <Typography
            sx={{
              color: "#6b6b6b",
              mb: 5,
              textAlign: "center",
            }}
          >
            Create an account and start sharing your ideas
          </Typography>

          <RegisterForm />
        </Box>
      </Container>
    </Box>
  );
}
