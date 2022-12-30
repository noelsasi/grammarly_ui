import React from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

export default function ResultProgress({ result, text }) {
  return (
    <Grid item md={4}>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          mt: result !== 76 && { xs: 8, md: 0 },
        }}
      >
        <CircularProgress
          size={146}
          color="primary"
          value={result}
          variant="determinate"
          thickness={1}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography fontWeight={600} variant="h5" component="div">
            {result}%
          </Typography>
        </Box>
      </Box>
      <Typography mt={2}>{text}</Typography>
    </Grid>
  );
}
