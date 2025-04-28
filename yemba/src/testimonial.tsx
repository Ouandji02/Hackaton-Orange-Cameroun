"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery,
  Rating,
  Paper,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  FormatQuote as QuoteIcon,
} from "@mui/icons-material";

interface TestimonialProps {
  mode?: "light" | "dark";
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  featured?: boolean;
}

export default function TestimonialsSection({
  mode = "light",
}: TestimonialProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const isDarkMode = mode === "dark";

  // Couleurs adaptatives selon le mode
  const bgColor = isDarkMode ? "#111827" : "#f8fafc";
  const cardBgColor = isDarkMode ? "#1f2937" : "#ffffff";
  const textColor = isDarkMode ? "#e2e8f0" : "#334155";
  const mutedTextColor = isDarkMode ? "#94a3b8" : "#64748b";
  const primaryColor = "#3366FF";
  const accentColor = isDarkMode ? "#8b5cf6" : "#6366f1";
  const borderColor = isDarkMode
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.06)";

  // Données des témoignages
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Directrice Marketing",
      company: "TechVision",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "SaaSify a complètement transformé notre façon de travailler. L'automatisation des tâches nous a permis de gagner un temps précieux et d'améliorer notre productivité de 40%. Je recommande vivement cette plateforme à toutes les équipes marketing.",
      featured: true,
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Chef de Projet",
      company: "InnovateCorp",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Grâce à SaaSify, notre équipe collabore de manière plus efficace. Les outils d'analyse nous permettent de prendre des décisions basées sur des données concrètes. Le support client est également exceptionnel, toujours disponible pour répondre à nos questions.",
    },
    {
      id: 3,
      name: "Emma Leroy",
      role: "CEO",
      company: "StartupFlow",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "En tant que startup, nous avions besoin d'une solution flexible qui pourrait évoluer avec nous. SaaSify a dépassé nos attentes avec son interface intuitive et ses fonctionnalités puissantes. Notre équipe a pu s'adapter rapidement et sans difficulté.",
    },
    {
      id: 4,
      name: "Alexandre Chen",
      role: "Responsable Technique",
      company: "DataSphere",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "L'intégration de SaaSify avec nos outils existants a été remarquablement simple. La sécurité des données est impressionnante et nous donne une tranquillité d'esprit totale. Je suis particulièrement satisfait des mises à jour régulières qui apportent constamment de nouvelles fonctionnalités.",
      featured: true,
    },
    {
      id: 5,
      name: "Julie Moreau",
      role: "Responsable RH",
      company: "GlobalTeam",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "SaaSify nous a aidés à centraliser nos processus RH et à améliorer la communication interne. La plateforme est intuitive et personnalisable selon nos besoins spécifiques. Le rapport qualité-prix est excellent pour les fonctionnalités offertes.",
    },
  ];

  // Gestion de l'autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  // Navigation
  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  // Filtrer les témoignages mis en avant pour l'affichage principal
  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const displayedTestimonial =
    featuredTestimonials[activeIndex % featuredTestimonials.length];

  return (
    <Box
      id="testimonials"
      sx={{
        bgcolor: bgColor,
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Formes décoratives */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "40%",
          height: "40%",
          background: `radial-gradient(circle, ${
            isDarkMode ? "rgba(99, 102, 241, 0.08)" : "rgba(99, 102, 241, 0.05)"
          } 0%, transparent 70%)`,
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "30%",
          height: "30%",
          background: `radial-gradient(circle, ${
            isDarkMode ? "rgba(139, 92, 246, 0.08)" : "rgba(139, 92, 246, 0.05)"
          } 0%, transparent 70%)`,
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* En-tête de section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Chip
            label="Témoignages"
            sx={{
              backgroundColor: isDarkMode
                ? "rgba(99, 102, 241, 0.1)"
                : "rgba(99, 102, 241, 0.1)",
              color: accentColor,
              fontWeight: 500,
              mb: 2,
            }}
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: textColor,
              mb: 2,
            }}
          >
            Ce que nos clients disent
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: mutedTextColor,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Découvrez comment SaaSify aide les entreprises à transformer leurs
            processus et à atteindre leurs objectifs.
          </Typography>
        </Box>

        {/* Témoignage principal */}
        <Box sx={{ mb: 6 }}>
          <Paper
            elevation={isDarkMode ? 0 : 2}
            sx={{
              bgcolor: cardBgColor,
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              border: isDarkMode ? `1px solid ${borderColor}` : "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: -20,
                color: isDarkMode
                  ? "rgba(99, 102, 241, 0.1)"
                  : "rgba(99, 102, 241, 0.1)",
                fontSize: "12rem",
                zIndex: 0,
              }}
            >
              <QuoteIcon fontSize="inherit" />
            </Box>

            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={displayedTestimonial.image}
                  alt={displayedTestimonial.name}
                  sx={{
                    width: 120,
                    height: 120,
                    mb: 2,
                    border: `4px solid ${
                      isDarkMode
                        ? "rgba(99, 102, 241, 0.3)"
                        : "rgba(99, 102, 241, 0.2)"
                    }`,
                  }}
                />
                <Typography variant="h6" fontWeight="bold" color={textColor}>
                  {displayedTestimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  color={mutedTextColor}
                  sx={{ mb: 1 }}
                >
                  {displayedTestimonial.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: accentColor,
                    fontWeight: 500,
                    mb: 2,
                  }}
                >
                  {displayedTestimonial.company}
                </Typography>
                <Rating
                  value={displayedTestimonial.rating}
                  readOnly
                  precision={0.5}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={8}
                sx={{ position: "relative", zIndex: 1 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: textColor,
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    mb: 3,
                  }}
                >
                  "{displayedTestimonial.text}"
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 4,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {featuredTestimonials.map((_, index) => (
                      <Box
                        key={index}
                        onClick={() => handleDotClick(index)}
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor:
                            index === activeIndex % featuredTestimonials.length
                              ? accentColor
                              : borderColor,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      onClick={handlePrev}
                      sx={{
                        bgcolor: isDarkMode
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.03)",
                        "&:hover": {
                          bgcolor: isDarkMode
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.05)",
                        },
                      }}
                    >
                      <ArrowBackIcon sx={{ color: textColor }} />
                    </IconButton>
                    <IconButton
                      onClick={handleNext}
                      sx={{
                        bgcolor: isDarkMode
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.03)",
                        "&:hover": {
                          bgcolor: isDarkMode
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.05)",
                        },
                      }}
                    >
                      <ArrowForwardIcon sx={{ color: textColor }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Grille de témoignages secondaires */}
        <Grid container spacing={3}>
          {testimonials
            .filter((t) => !t.featured)
            .slice(0, isTablet ? 2 : 3)
            .map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Card
                  elevation={isDarkMode ? 0 : 1}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    bgcolor: cardBgColor,
                    border: isDarkMode ? `1px solid ${borderColor}` : "none",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: isDarkMode
                        ? "0 10px 30px rgba(0,0,0,0.3)"
                        : "0 10px 30px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: textColor,
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{ width: 48, height: 48, mr: 2 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color={textColor}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color={mutedTextColor}>
                        {testimonial.role}, {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
