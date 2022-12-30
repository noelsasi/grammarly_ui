import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

export const TextInfo = ({ title, subtitle, index }) => {
  return (
    <Box
      sx={{
        pb: 2,
        mb: 2,
        borderBottom: `${index === 3 ? "3px" : "1px"} solid ${
          index === 3 ? "black" : grey[500]
        }`,
      }}
    >
      <Typography
        fontWeight={600}
        sx={{ color: index === 3 ? "secondary" : "secondary.dark" }}
      >
        {title}
      </Typography>
      <Typography color="secondary.light">{subtitle}</Typography>
    </Box>
  );
};
