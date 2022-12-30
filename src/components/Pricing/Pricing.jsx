import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import PriceCard from "./PriceCard";

export default function Pricing() {
  const FreeList = ["Spelling", "Grammar", "Punctuation", "Conciseness"];
  const PremiumList = [
    "Everything in Free",
    "Clarity-focused sentence rewrites",
    "Tone adjustments",
    "Plagiarism detection",
    "Word choice",
    "Formality level",
    "Fluency",
    "Additional advanced suggestions",
  ];

  const FreeCardProps = {
    title: "Free",
    subtitle: "Basic writing suggestions",
    caption: "For Casual writing",
    buttonText: "Included in Premium",
    buttonDisabled: true,
    FeatList: FreeList,
  };

  const PremiumCardProps = {
    title: "Premium",
    subtitle: "Style, tone, and clarity improvements",
    subtitle1: "for writing at work and school",
    caption: "For work and school",
    buttonText: "Upgrade to Grammarly Premium",
    buttonDisabled: false,
    FeatList: PremiumList,
  };

  return (
    <section
      style={{
        backgroundColor: "white",
        position: "relative",
        zIndex: 999,
      }}
    >
      <Container
        maxWidth={"md"}
        sx={{
          mt: 10,
        }}
      >
        <Typography
          sx={{ textAlign: "center" }}
          variant="h5"
          fontWeight={700}
          textTransform="capitalize"
        >
          Up-Level your commnunication
        </Typography>
        <Typography
          mt={2}
          sx={{ textAlign: "center" }}
          color="secondary"
          variant="body1"
        >
          Unlock Grammarly Premium's advanced features and suggestions
        </Typography>

        <Grid
          container
          columnSpacing={{ md: 8 }}
          sx={{
            mt: 5,
            mx: "auto",
            justifyContent: { md: "center", xs: "flex-start" },
            pl: { xs: 3, md: "auto" },
          }}
        >
          <PriceCard {...FreeCardProps} />

          <PriceCard {...PremiumCardProps} />
        </Grid>
      </Container>
    </section>
  );
}
