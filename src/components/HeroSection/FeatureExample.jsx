import { Typography, Box, Card } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FeatureExample() {
  return (
    <Box position={"relative"}>
      <Card
        variant="outlined"
        sx={{
          width: { xs: 290, md: 350 },
          height: 180,
          padding: 3,
          border: "none",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: 2,
        }}
      >
        <Typography color={grey[800]} sx={{ mt: 2 }}>
          <Typography
            component="span"
            sx={{
              borderBottom: "3px solid",
              borderBottomColor: purple[500],
              backgroundColor: purple[50],
              paddingY: 0.4,
            }}
          >
            I think we should be able to
          </Typography>{" "}
          solve this
        </Typography>
        <Typography mt={0.8} color={grey[800]}>
          issue for you
        </Typography>
      </Card>
      <Card
        variant="outlined"
        sx={{
          position: "absolute",
          bottom: -50,
          left: { xs: 40, md: 50 },
          width: { xs: 250, md: 350 },
          padding: 3,
          border: "none",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              mt: 0.5,
              width: 15,
              height: 15,
              backgroundImage: `linear-gradient(to top, ${purple[500]} 0%, ${purple[100]} 100%)`,
              borderRadius: 50,
            }}
          />
          <Box ml={2}>
            <Typography fontWeight={600} color={grey[800]}>
              Strike the right tone
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ textDecoration: "line-through" }}
                color={grey[500]}
              >
                I think we should be able to
              </Typography>
              <Typography
                variant="body2"
                component={"span"}
                mx={1}
                mt={0.4}
                color={grey[500]}
              >
                <ArrowForwardIcon />
              </Typography>
              <Typography color="primary">We can</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
