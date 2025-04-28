import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "./App.css";
import TranslatorInterface from "./Translator";
import React, { useState } from "react";
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import SaaSifyLanding from "./HomePage";
import DictionaryApp from "./Dictionnaire";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router";
import Footer from "./Footer";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#ff6600",
          },
          background: {
            default: mode === "light" ? "#ffffff" : "#121212",
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: "4rem",
            fontWeight: 800,
            lineHeight: 1.2,
          },
          h2: {
            fontSize: "2rem",
            fontWeight: 700,
          },
          subtitle1: {
            fontSize: "1.25rem",
            lineHeight: 1.6,
            color:
              mode === "light"
                ? "rgba(0, 0, 0, 0.6)"
                : "rgba(255, 255, 255, 0.7)",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 28,
                textTransform: "none",
                fontWeight: 600,
                padding: "10px 24px",
              },
              containedPrimary: {
                boxShadow: "none",
                color: "white",
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(51, 102, 255, 0.25)",
                },
              },
              outlinedPrimary: {
                borderColor:
                  mode === "light"
                    ? "rgba(0, 0, 0, 0.12)"
                    : "rgba(255, 255, 255, 0.12)",
                color:
                  mode === "light"
                    ? "rgba(0, 0, 0, 0.87)"
                    : "rgba(255, 255, 255, 0.87)",
                "&:hover": {
                  backgroundColor:
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.04)"
                      : "rgba(255, 255, 255, 0.04)",
                  borderColor:
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.12)"
                      : "rgba(255, 255, 255, 0.12)",
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                fontWeight: 500,
              },
            },
          },
        },
      }),
    [mode, prefersDarkMode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: "100vh",
            minWidth: "100vh",
            backgroundImage: `linear-gradient(${
              theme.palette.background.default
            } 1px, transparent 1px), linear-gradient(90deg, ${
              theme.palette.background.default
            } 1px, ${
              mode === "light"
                ? "rgba(0, 0, 0, 0.02)"
                : "rgba(255, 255, 255, 0.02)"
            } 1px)`,
            backgroundSize: "80px 80px",
            backgroundPosition: "-1px -1px",
          }}
        >
          <AppBar
            position="sticky"
            elevation={0}
            sx={{ backgroundColor: theme.palette.background.default }}
          >
            <Container>
              <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                <Link to="/">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        mr: 1,
                      }}
                    >
                      T
                    </Box>
                    <Typography
                      color="textPrimary"
                      variant="h6"
                      component="div"
                      fontWeight="bold"
                    >
                      Tradora
                    </Typography>
                  </Box>
                </Link>

                {pathname === "/" ? (
                  <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                    <a style={{ color: "text.primary" }} href="#home">
                      <Button sx={{ color: "text.primary" }} color="inherit">
                        Accueil
                      </Button>
                    </a>
                    <a style={{ color: "text.primary" }} href="#apps">
                      <Button sx={{ color: "text.primary" }} color="inherit">
                        Apps
                      </Button>
                    </a>
                    <a style={{ color: "text.primary" }} href="#testimonials">
                      <Button sx={{ color: "text.primary" }} color="inherit">
                        Témoignages
                      </Button>
                    </a>
                  </Box>
                ) : (
                  <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
                    <Button
                      color={pathname === "/translate" ? "primary" : "inherit"}
                      onClick={() => navigate("/translate")}
                    >
                      Traduction
                    </Button>
                    <Button
                      color={pathname === "/dict" ? "primary" : "inherit"}
                      onClick={() => navigate("/dict")}
                    >
                      Dictionnaire
                    </Button>
                  </Box>
                )}

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <IconButton onClick={toggleColorMode} color="inherit">
                    {theme.palette.mode === "dark" ? (
                      <LightModeIcon />
                    ) : (
                      <DarkModeIcon />
                    )}
                  </IconButton>
                  {pathname === "/" && (
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ display: { xs: "none", sm: "flex" } }}
                      onClick={() => navigate("/translate")}
                    >
                      Commencer
                    </Button>
                  )}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <Routes>
            <Route path="/" element={<SaaSifyLanding mode={mode} />} />
            <Route
              path="/translate"
              element={<TranslatorInterface mode={mode} />}
            />
            <Route path="/dict" element={<DictionaryApp mode={mode} />} />
          </Routes>
          <Footer mode={mode} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
