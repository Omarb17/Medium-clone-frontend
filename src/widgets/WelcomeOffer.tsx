import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

const WelcomeOffer = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        gap: "15px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "info.main",
        padding: "10px",
        border: "0.1rem solid",
      }}
    >
      <Chip
        label="Welcome Offer"
        sx={{ backgroundColor: "white", borderRadius: "6px" }}
      />
      <Typography variant="subtitle1" gutterBottom>
        Access to everything. Now 30% off.
      </Typography>
      <Link href="#" variant="subtitle1" sx={{ fontWeight: "600" }}>
        Upgrade now
      </Link>
    </Box>
  );
};

export default WelcomeOffer;
