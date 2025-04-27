"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  CssBaseline,
} from "@mui/material"
import {
  Home as HomeIcon,
  ViewModule as ViewModuleIcon,
  Lightbulb as LightbulbIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  Support as SupportIcon,
  Analytics as AnalyticsIcon,
} from "@mui/icons-material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    h4: {
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 24px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          },
        },
      },
    },
  },
})

const featureCards = [
  {
    title: "Design Intuitif",
    description: "Interface utilisateur simple et intuitive pour une expérience utilisateur optimale.",
    icon: <LightbulbIcon fontSize="large" color="primary" />,
  },
  {
    title: "Performance",
    description: "Optimisé pour des temps de chargement rapides et une expérience fluide.",
    icon: <SpeedIcon fontSize="large" color="primary" />,
  },
  {
    title: "Sécurité",
    description: "Protection des données et sécurité avancée pour votre tranquillité d'esprit.",
    icon: <SecurityIcon fontSize="large" color="primary" />,
  },
  {
    title: "Responsive",
    description: "S'adapte parfaitement à tous les appareils, du mobile au desktop.",
    icon: <DevicesIcon fontSize="large" color="primary" />,
  },
  {
    title: "Support 24/7",
    description: "Notre équipe est disponible à tout moment pour vous aider.",
    icon: <SupportIcon fontSize="large" color="primary" />,
  },
  {
    title: "Analytiques",
    description: "Suivez vos performances avec des outils d'analyse détaillés.",
    icon: <AnalyticsIcon fontSize="large" color="primary" />,
  },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("accueil")
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          color="default"
          elevation={scrolled ? 4 : 0}
          sx={{
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
            transition: "all 0.3s ease",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              MonSite
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                color="inherit"
                startIcon={<HomeIcon />}
                onClick={() => scrollToSection("accueil")}
                sx={{
                  borderBottom: activeSection === "accueil" ? "2px solid #1976d2" : "none",
                  borderRadius: 0,
                  paddingBottom: "4px",
                }}
              >
                Accueil
              </Button>
              <Button
                color="inherit"
                startIcon={<ViewModuleIcon />}
                onClick={() => scrollToSection("fonctionnalites")}
                sx={{
                  borderBottom: activeSection === "fonctionnalites" ? "2px solid #1976d2" : "none",
                  borderRadius: 0,
                  paddingBottom: "4px",
                }}
              >
                Fonctionnalités
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Section Accueil */}
      <Box
        id="accueil"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 2 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                  Bienvenue sur notre plateforme innovante
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                  Nous proposons des solutions modernes et efficaces pour répondre à tous vos besoins. Notre approche
                  centrée sur l'utilisateur garantit une expérience exceptionnelle.
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={() => scrollToSection("fonctionnalites")}
                  >
                    Découvrir nos fonctionnalités
                  </Button>
                  <Button variant="outlined" size="large" color="primary">
                    En savoir plus
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src="/placeholder.svg?height=400&width=500"
                  alt="Image d'accueil"
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: 4,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section Fonctionnalités */}
      <Box
        id="fonctionnalites"
        sx={{
          minHeight: "100vh",
          py: 10,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Nos Fonctionnalités
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto" }}>
              Découvrez les fonctionnalités qui font de notre plateforme un outil indispensable pour votre succès.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {featureCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ mb: 2 }}>{card.icon}</Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#1976d2", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} MonSite. Tous droits réservés.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
