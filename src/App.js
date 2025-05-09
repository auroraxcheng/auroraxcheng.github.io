import React from "react";
import {
  ThemeProvider,
  createTheme,
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
  IconButton,
  Avatar,
  Stack,
  useMediaQuery,
  CssBaseline,
} from "@mui/material";
import ExperienceSection from "./components/experience/ExperienceSection.js";
import { styled } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import pfp from "./assets/avatar.png";
import me from "./assets/pfp.jpg";

// edit custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#895292", // Your purple color from the original site
    },
    secondary: {
      main: "#796a78", // Your secondary text color
    },
    background: {
      default: "#ffffff",
      paper: "#fffbf8",
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600,
      color: "#895292",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#895292",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#796a78",
    },
    body1: {
      fontSize: "1.2rem",
      color: "#796a78",
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "1.5rem",
          padding: "0.75rem 2rem",
        },
      },
    },
  },
});

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(4, 0),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(6),
  display: "inline-block",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "30%",
    height: "3px",
    background: theme.palette.primary.main,
    bottom: "-10px",
    left: "0",
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[10],
  },
}));

const CurrentlyItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& svg": {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Navigation */}
      <AppBar position="sticky" color="background" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Avatar
              src={pfp}
              alt="Aurora Cheng"
              sx={{
                width: 48,
                height: 48,
                display: "flex",
              }}
            />

            <Box sx={{ display: "flex", gap: 4 }}>
              <Button color="secondary" href="#home">
                home
              </Button>
              <Button color="secondary" href="#about">
                about
              </Button>
              <Button color="secondary" href="#experience">
                portfolio
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="https://drive.google.com/file/d/1Qw4mioca6P03AMVDSRhTCP3RjRDMxLw1//view"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <HeroSection id="home" sx={{ minHeight: "25vh", py: 2, paddingTop: 15 }}>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom>
            Hi, I'm Aurora!
          </Typography>
          <Typography variant="h3" component="p" sx={{ mb: 2 }}>
            I'm a product designer and software developer passionate about the
            intersection between innovation and user design ⋆˚࿔
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <IconButton
              color="primary"
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/aurora-cheng04/"
              target="_blank"
              sx={{ border: "1px solid", borderColor: "primary.main" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="GitHub"
              component="a"
              href="https://github.com/auroraxcheng"
              target="_blank"
              sx={{ border: "1px solid", borderColor: "primary.main" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="Email"
              component="a"
              href="mailto:auroraxcheng@gmail.com"
              sx={{ border: "1px solid", borderColor: "primary.main" }}
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Container>
      </HeroSection>

      {/* About Section */}
      <Box id="about" sx={{ py: 10, backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          {/* Use Stack instead of Grid for more reliable layout */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            {/* Image container with fixed dimensions */}
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={me}
                alt="About Aurora"
                sx={{
                  maxWidth: "100%",
                  maxHeight: "500px",
                  borderRadius: "16px",
                  boxShadow: theme.shadows[5],
                  objectFit: "cover",
                  verticalAlign: "top",
                }}
              />
            </Box>

            {/* Content container */}
            <Box
              sx={{ width: { xs: "100%", md: "60%" }, mt: { xs: 4, md: 0 } }}
            >
              <SectionTitle variant="h2" component="h2">
                about me:
              </SectionTitle>

              <Typography variant="body1" paragraph>
                I'm a computer science major @ UBC and I love all things
                creative.
              </Typography>

              <Typography
                variant="h6"
                sx={{ mb: 2, mt: 4, color: "primary.main" }}
              >
                currently, I am...
              </Typography>

              <CurrentlyItem sx={{ mb: 1 }}>
                <Typography variant="body1">
                  💻 incoming PM @ govt BC, previous SDE @ UBC x AWS CIC
                </Typography>
              </CurrentlyItem>

              <CurrentlyItem sx={{ mb: 1 }}>
                <Typography variant="body1">
                  🌱 software developer with UBC BizTech
                </Typography>
              </CurrentlyItem>

              <CurrentlyItem sx={{ mb: 1 }}>
                <Typography variant="body1">
                  ✨ VP marketing & design for UBC UX Hub
                </Typography>
              </CurrentlyItem>

              <CurrentlyItem sx={{ mb: 1 }}>
                <Typography variant="body1">
                  🌸 creating jewelry for my{" "}
                  <Link
                    href="https://www.instagram.com/aurorajewelss/"
                    color="primary"
                    target="_blank"
                  >
                    small business
                  </Link>
                </Typography>
              </CurrentlyItem>

              <CurrentlyItem>
                <Typography variant="body1">
                  ✈️ just finished an exchange semester in South Korea!
                </Typography>
              </CurrentlyItem>

              <Button
                endIcon={<KeyboardArrowRightIcon />}
                color="primary"
                sx={{ mt: 4 }}
                href="https://auroracheng.webflow.io/"
                target="_blank"
              >
                check out my design portfolio here
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <ExperienceSection />

      <Box
        component="footer"
        sx={{ py: 3, backgroundColor: "background.paper", textAlign: "center" }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="secondary">
            designed and coded by © 2025 aurora cheng 🍡
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
