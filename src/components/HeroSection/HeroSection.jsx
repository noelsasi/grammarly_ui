import { Box, CardMedia, Container } from "@mui/material";
import React from "react";
import HeroTitle from "./HeroTitle";
import FeatureExample from "./FeatureExample";
import FeatureText from "./FeatureText";

export default function HeroSection() {
  return (
    <section>
      <CardMedia
        sx={{
          position: "absolute",
          top: { md: 0, xs: 200 },
          width: { md: 1000, xs: 500 },
          left: -100,
          zIndex: 9,
        }}
        component={"img"}
        src="https://static.grammarly.com/assets/files/06666c30f97cce25ac1cf1c4573332c2/swoosh.png"
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 99 }}>
        <HeroTitle />
        <Box
          mt={10}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-around",
          }}
        >
          <FeatureExample />
          <FeatureText />
        </Box>
      </Container>
    </section>
  );
}
