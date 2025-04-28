"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  ThemeProvider,
  CssBaseline,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import TestimonialsSection from "./testimonial";

type Props = {
  mode: "dark" | "light";
};
export default function SaaSifyLanding({ mode }: Props) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          minWidth: "100vh",
          backgroundSize: "80px 80px",
          backgroundPosition: "-1px -1px",
        }}
      >
        <Container sx={{ mt: { xs: 8, md: 12 }, mb: 10, textAlign: "center" }}>
          <Box sx={{ maxWidth: 900, mx: "auto" }}>
            <Typography variant="h1" component="h1" gutterBottom>
              Boost ton expérience avec Tradora
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ mt: 3, mb: 6, maxWidth: 800, mx: "auto" }}
            >
              L'ultime plateforme IA pour traduire, écouter, comprendre et
              apprendre la langue Yemba. Explorez des outils puissants réunis
              dans une seule application pour repousser vos limites
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 5 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate("/translate")}
              >
                Essayer Gratuitement
              </Button>
            </Stack>
          </Box>
        </Container>

        <Box
          id="apps"
          sx={{
            py: 10,
            margin: "0 auto",
            backgroundColor:
              mode === "light"
                ? "rgba(0, 0, 0, 0.01)"
                : "rgba(255, 255, 255, 0.01)",
          }}
        >
          <Container>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Chip
                label="Apps"
                sx={{
                  backgroundColor:
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.05)"
                      : "rgba(255, 255, 255, 0.05)",
                  color:
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.7)"
                      : "rgba(255, 255, 255, 0.7)",
                  px: 1,
                  mb: 3,
                }}
              />
              <Typography variant="h2" component="h2" gutterBottom>
                Ce dont tu as besoin pour une meilleur expérience
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ maxWidth: 800, mx: "auto" }}
              >
                Notre plateforme complète fournit tous les outils dont vous avez
                besoin pour rationaliser votre flux de travail, augmenter votre
                productivité et atteindre vos objectifs.
              </Typography>
            </Box>

            <Grid container spacing={1}>
              {/* Feature 1 */}

              <Grid size={{ xs: 12, md: 4 }}>
                <Link to="/translate">
                  <Box
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: 4,
                      border: `1px solid ${
                        mode === "light"
                          ? "rgba(0, 0, 0, 0.08)"
                          : "rgba(255, 255, 255, 0.08)"
                      }`,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow:
                          mode === "light"
                            ? "0 10px 30px rgba(0,0,0,0.05)"
                            : "0 10px 30px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        backgroundColor: "rgba(51, 102, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontSize: "1.5rem" }}
                      >
                        ⚡
                      </Box>
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Traduction
                    </Typography>
                    <Typography color="text.secondary">
                      Un traduction instantanée et précise de vos textes et
                      documents
                    </Typography>
                  </Box>
                </Link>
              </Grid>

              {/* Feature 2 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Link to="/dict">
                  <Box
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: 4,
                      border: `1px solid ${
                        mode === "light"
                          ? "rgba(0, 0, 0, 0.08)"
                          : "rgba(255, 255, 255, 0.08)"
                      }`,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow:
                          mode === "light"
                            ? "0 10px 30px rgba(0,0,0,0.05)"
                            : "0 10px 30px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        backgroundColor: "rgba(51, 102, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontSize: "1.5rem" }}
                      >
                        📊
                      </Box>
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Dictionnaire
                    </Typography>
                    <Typography color="text.secondary">
                      Avec son dictionnaire, vous pouvez explorer les mots et
                      leurs significations dans le contexte de la langue
                    </Typography>
                  </Box>
                </Link>
              </Grid>

              {/* Feature 3 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    border: `1px solid ${
                      mode === "light"
                        ? "rgba(0, 0, 0, 0.08)"
                        : "rgba(255, 255, 255, 0.08)"
                    }`,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow:
                        mode === "light"
                          ? "0 10px 30px rgba(0,0,0,0.05)"
                          : "0 10px 30px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",

                      backgroundColor: "rgba(51, 102, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontSize: "1.5rem" }}
                    >
                      👥
                    </Box>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Education et diverstissement
                  </Typography>
                  <Typography color="text.secondary">
                    Apprenez la langue Yemba à travers des jeux et des quizs
                  </Typography>
                </Box>
              </Grid>

              {/* Feature 4 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    border: `1px solid ${
                      mode === "light"
                        ? "rgba(0, 0, 0, 0.08)"
                        : "rgba(255, 255, 255, 0.08)"
                    }`,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow:
                        mode === "light"
                          ? "0 10px 30px rgba(0,0,0,0.05)"
                          : "0 10px 30px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(51, 102, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontSize: "1.5rem" }}
                    >
                      🛡️
                    </Box>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Historique culturelle
                  </Typography>
                  <Typography color="text.secondary">
                    Explorez la culture Yemba à travers des histoires et des
                    traditions
                  </Typography>
                </Box>
              </Grid>

              {/* Feature 5 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    border: `1px solid ${
                      mode === "light"
                        ? "rgba(0, 0, 0, 0.08)"
                        : "rgba(255, 255, 255, 0.08)"
                    }`,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow:
                        mode === "light"
                          ? "0 10px 30px rgba(0,0,0,0.05)"
                          : "0 10px 30px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      backgroundColor: "rgba(51, 102, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontSize: "1.5rem" }}
                    >
                      🔄
                    </Box>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Géolocalisation
                  </Typography>
                  <Typography color="text.secondary">
                    Découvrez les lieux et les personnes qui parlent la langue
                    Yemba autour de vous
                  </Typography>
                </Box>
              </Grid>

              {/* Feature 6 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Link to="/">
                  <Box
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: 4,
                      border: `1px solid ${
                        mode === "light"
                          ? "rgba(0, 0, 0, 0.08)"
                          : "rgba(255, 255, 255, 0.08)"
                      }`,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow:
                          mode === "light"
                            ? "0 10px 30px rgba(0,0,0,0.05)"
                            : "0 10px 30px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        backgroundColor: "rgba(51, 102, 255, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontSize: "1.5rem" }}
                      >
                        ⭐
                      </Box>
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Ventes et decouvertes
                    </Typography>
                    <Typography color="text.secondary">
                      Découvrez les produits et services de la culture Yemba
                      autour de vous
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <TestimonialsSection mode={mode} />
    </ThemeProvider>
  );
}
