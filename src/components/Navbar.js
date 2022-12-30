import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Logo from "../assets/logo.svg";
import { Button, CardMedia, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Navbar() {
  return (
    <AppBar
      color="transparent"
      sx={{
        boxShadow: "none",
        padding: 2,
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="https://www.grammarly.com">
            <CardMedia
              component={"img"}
              src={Logo}
              alt="Logo"
              sx={{
                height: 32,
                width: 122,
              }}
            />
          </Link>
          <Button
            sx={{ textTransform: "inherit" }}
            color="secondary"
            variant="text"
          >
            <Typography fontWeight={600}> Log in</Typography>
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;
