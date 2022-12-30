import { Typography, Box, Button } from "@mui/material";
import React from "react";

export default function HeroTitle() {
  return (
    <Box mt={5} sx={{ textAlign: "center" }}>
      <Typography
        // variant="h3"
        fontWeight={600}
        sx={{
          fontSize: {
            md: 50,
            xs: 24,
          },
          fontWeight: 600,
        }}
        textTransform="capitalize"
      >
        Aim high with brilliant writing
      </Typography>
      <Button
        size="large"
        sx={{ textTransform: "capitalize", mt: 4 }}
        color="primary"
        variant="contained"
      >
        <Typography color={"white"} textTransform="capitalize">
          Upgrade to grammarly premium
        </Typography>
      </Button>
    </Box>
  );
}
