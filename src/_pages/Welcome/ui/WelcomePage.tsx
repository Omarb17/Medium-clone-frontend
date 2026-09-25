"use client";

import { useRouter } from "next/navigation";
import { Box, Button, Container, Typography } from "@mui/material";

import Navbar from "@/src/widgets/Navbar";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar
        hasSidebarButton={false}
        hasSearchBar={false}
        isWelcomePage={true}
      />

      <Box
        sx={{
          minHeight: "calc(100vh - 65px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #e6e6e6",
          backgroundColor: "#fff",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            py: { xs: 8, md: 12 },
          }}
        >
          <Box
            sx={{
              maxWidth: 850,
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
                  xs: "3.5rem",
                  sm: "5rem",
                  md: "6.5rem",
                },
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.05em",
                color: "#242424",
                mb: 4,
              }}
            >
              Read. Write. Share.
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  md: "1.5rem",
                },
                lineHeight: 1.5,
                color: "#242424",
                maxWidth: 650,
                mb: 5,
              }}
            >
              Discover stories, share your ideas, and connect with people who
              have something meaningful to say.
            </Typography>

            <Button
              variant="contained"
              onClick={() => router.push("/register")}
              sx={{
                backgroundColor: "#1a8917",
                color: "#fff",
                borderRadius: "999px",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                textTransform: "none",
                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#156d13",
                  boxShadow: "none",
                },
              }}
            >
              Get started
            </Button>

            <Typography
              sx={{
                mt: 3,
                color: "#6b6b6b",
                fontSize: "0.95rem",
              }}
            >
              Already have an account?{" "}
              <Box
                component="button"
                onClick={() => router.push("/login")}
                sx={{
                  border: 0,
                  padding: 0,
                  background: "none",
                  color: "#1a8917",
                  fontSize: "inherit",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Sign in
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WelcomePage;
