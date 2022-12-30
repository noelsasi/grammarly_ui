import { Box } from "@mui/material";
import React from "react";
import { TextInfo } from "./TextInfo";

export default function FeatureText() {
  const textLines = [
    {
      title: "Clear, confident communication",
      subtitle: "Take the guesswork out of great writing",
    },
    {
      title: "Comprehensive real-time feedback",
      subtitle: "Effective writing takes more than good grammer",
    },
    {
      title: "Support you can rely on",
      subtitle: "Write with a second pair of eyes that never gets tired",
    },
    {
      title: "Strike the right tone",
      subtitle: "Make the best impression, every time",
    },
  ];
  return (
    <Box
      sx={{
        mt: { xs: 25, md: 0 },
        px: { xs: 2, md: 0 },
        textAlign: { xs: "center", md: "start" },
      }}
    >
      {React.Children.toArray(
        textLines.map((item, index) => (
          <TextInfo index={index} title={item.title} subtitle={item.subtitle} />
        ))
      )}
    </Box>
  );
}
