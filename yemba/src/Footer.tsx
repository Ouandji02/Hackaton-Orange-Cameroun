"use client";

import type React from "react";
import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
  Link,
  Divider,
  useTheme,
  useMediaQuery,
  InputAdornment,
  Tooltip,
  alpha,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  GitHub as GitHubIcon,
  Send as SendIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";

interface FooterProps {
  mode?: "light" | "dark";
}

export default function Footer({ mode = "light" }: FooterProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      // Ici vous pourriez ajouter la logique pour envoyer l'email à votre API
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();
  const isDarkMode = mode === "dark";

  const bgColor = isDarkMode ? "#111827" : "#f8fafc";
  const textColor = isDarkMode ? "#e2e8f0" : "#334155";
  const mutedTextColor = isDarkMode ? "#94a3b8" : "#64748b";
  const borderColor = isDarkMode
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.06)";
  const hoverColor = isDarkMode
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(0, 0, 0, 0.03)";
  const primaryColor = "#3366FF";

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: bgColor,
        color: textColor,
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Formes décoratives */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(
            primaryColor,
            0.1
          )} 0%, ${alpha(primaryColor, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${alpha(
            primaryColor,
            0.05
          )} 0%, ${alpha(primaryColor, 0)} 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={2}>
          {/* Logo et description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
              <Typography variant="h6" component="div" fontWeight="bold">
                Tradora
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color={mutedTextColor}
              sx={{ mb: 3, maxWidth: 300 }}
            >
              L'ultime plateforme IA pour traduire, écouter, comprendre et
              apprendre la langue Yemba. Explorez des outils puissant
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                Suivez-nous
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  size="small"
                  sx={{
                    color: mutedTextColor,
                    "&:hover": { color: primaryColor, bgcolor: hoverColor },
                    transition: "all 0.2s",
                  }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: mutedTextColor,
                    "&:hover": { color: primaryColor, bgcolor: hoverColor },
                    transition: "all 0.2s",
                  }}
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: mutedTextColor,
                    "&:hover": { color: primaryColor, bgcolor: hoverColor },
                    transition: "all 0.2s",
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: mutedTextColor,
                    "&:hover": { color: primaryColor, bgcolor: hoverColor },
                    transition: "all 0.2s",
                  }}
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: mutedTextColor,
                    "&:hover": { color: primaryColor, bgcolor: hoverColor },
                    transition: "all 0.2s",
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Liens de navigation */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2 }}>
              Produit
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                "Fonctionnalités",
                "Tarification",
                "Intégrations",
                "Feuille de route",
                "Mises à jour",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  color={mutedTextColor}
                  sx={{
                    "&:hover": { color: primaryColor },
                    transition: "color 0.2s",
                    fontSize: "0.875rem",
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2 }}>
              Ressources
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                "Documentation",
                "Guides",
                "Tutoriels",
                "API",
                "Communauté",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  color={mutedTextColor}
                  sx={{
                    "&:hover": { color: primaryColor },
                    transition: "color 0.2s",
                    fontSize: "0.875rem",
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2 }}>
              Entreprise
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["À propos", "Clients", "Carrières", "Blog", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    color={mutedTextColor}
                    sx={{
                      "&:hover": { color: primaryColor },
                      transition: "color 0.2s",
                      fontSize: "0.875rem",
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 2 }}>
              Restez informé
            </Typography>
            <Typography variant="body2" color={mutedTextColor} sx={{ mb: 2 }}>
              Abonnez-vous à notre newsletter pour recevoir les dernières
              actualités.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe}>
              <TextField
                fullWidth
                placeholder="Votre email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                sx={{
                  mb: 1,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: isDarkMode
                      ? alpha("#fff", 0.05)
                      : alpha("#000", 0.02),
                    borderRadius: 2,
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: borderColor,
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        type="submit"
                        disabled={!email || subscribed}
                        sx={{ color: primaryColor }}
                      >
                        <SendIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {subscribed && (
                <Typography
                  variant="caption"
                  color="primary"
                  sx={{ display: "block", mb: 1 }}
                >
                  Merci pour votre inscription !
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: borderColor }} />

        {/* Pied de page et copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: 2,
          }}
        >
          <Typography variant="body2" color={mutedTextColor}>
            © {currentYear} SaaSify. Tous droits réservés.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Confidentialité", "Conditions", "Cookies", "Sécurité"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  color={mutedTextColor}
                  sx={{
                    "&:hover": { color: primaryColor },
                    transition: "color 0.2s",
                    fontSize: "0.75rem",
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </Box>

          <Tooltip title="Retour en haut">
            <IconButton
              onClick={scrollToTop}
              sx={{
                position: { xs: "relative", sm: "absolute" },
                right: { xs: 0, sm: 24 },
                bottom: { xs: 0, sm: 24 },
                bgcolor: isDarkMode
                  ? alpha(primaryColor, 0.1)
                  : alpha(primaryColor, 0.1),
                color: primaryColor,
                "&:hover": {
                  bgcolor: isDarkMode
                    ? alpha(primaryColor, 0.2)
                    : alpha(primaryColor, 0.2),
                },
                transition: "all 0.2s",
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
}
