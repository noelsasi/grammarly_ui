import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ResultProgress from "./ResultProgress";

export default function Results() {
  const results = [
    {
      result: 76,
      text: "76% of Grammarly users find writing more enjoyable.",
    },
    {
      result: 85,
      text: "85% of Grammarly users are now stronger writers.",
    },
    {
      result: 70,
      text: "70% of Grammarly users reported an increased level of writing confidence",
    },
  ];

  return (
    <section style={{ backgroundColor: "#f9faff" }}>
      <Container
        maxWidth="lg"
        sx={{ mt: { xs: 10, md: 15 }, py: 8, p: { xs: 6, md: 8 } }}
      >
        <Typography textTransform={"capitalize"} variant="h5" fontWeight={600}>
          Premium Customers report better results
        </Typography>
        <Typography mt={2} color="secondary" variant="body1">
          We routinely survey Grammarly users and have found that:
        </Typography>

        <Grid spacing={2} mt={5} container>
          {React.Children.toArray(
            results.map((item) => <ResultProgress {...item} />)
          )}
        </Grid>
      </Container>
    </section>
  );
}
