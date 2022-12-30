import React from "react";
import { Box, Button, Grid, List, Typography } from "@mui/material";
import FeaturesList from "./FeaturesList";

export default function PriceCard({
  title,
  subtitle,
  subtitle1,
  caption,
  buttonText,
  buttonDisabled,
  FeatList,
}) {
  return (
    <Grid item md={5} xs={10}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: title === "Premium" && { xs: 8, md: 0 },
          borderLeft: { xs: "1px solid #ddd", md: "none" },
          pl: { xs: 3, md: "0" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            color="secondary.light"
            variant="caption"
            fontWeight={500}
            textTransform={"uppercase"}
          >
            {caption}
          </Typography>
          <Typography variant="h5" fontWeight={600}>
            {title}
          </Typography>
          <Typography mt={1} variant="body2">
            {subtitle}
          </Typography>
          <Typography
            sx={{ display: "block", mb: subtitle1 ? 0 : 6.5 }}
            variant="body2"
          >
            {subtitle1}
          </Typography>

          <Button
            size="large"
            sx={{
              display: "block",
              width: "100%",
              textTransform: "capitalize",
              mt: 4,
              mb: 1,
            }}
            color="primary"
            variant="contained"
            disabled={buttonDisabled}
          >
            <Typography
              color={title === "Premium" ? "white" : "imherit"}
              textTransform="capitalize"
            >
              {buttonText}
            </Typography>
          </Button>

          <List>
            {React.Children.toArray(
              FeatList.map((list) => <FeaturesList text={list} />)
            )}
          </List>
        </Box>
      </Box>{" "}
    </Grid>
  );
}
