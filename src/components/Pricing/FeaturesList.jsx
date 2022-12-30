import { ListItem, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

export default function FeaturesList({ text }) {
  return (
    <ListItem
      sx={{
        pl: 0,
        pb: 0,
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <CheckIcon color="primary" />
      <Typography
        variant="body2"
        ml={1}
        sx={{ borderBottom: "1px dotted gray" }}
      >
        {text}
      </Typography>
    </ListItem>
  );
}
