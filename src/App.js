import Navbar from "./components/Navbar";
import { createTheme } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import HeroSection from "./components/HeroSection/HeroSection";
import Pricing from "./components/Pricing/Pricing";
import Results from "./components/Results/Results";

const theme = createTheme({
  palette: {
    primary: {
      main: "#15c39a",
    },
    secondary: {
      main: "#0E101A",
      dark: blue[600],
      light: grey[600],
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>
        <HeroSection />
        <Pricing />
        <Results />
      </main>
    </ThemeProvider>
  );
}

export default App;
