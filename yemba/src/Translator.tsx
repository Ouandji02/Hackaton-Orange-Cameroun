"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
  CssBaseline,
  TextField,
} from "@mui/material";
import {
  SwapHoriz as SwapIcon,
  Translate as TranslateIcon,
  Description as DocumentIcon,
  AudioFile,
} from "@mui/icons-material";
import axios from "axios";

type Props = {
  mode: "dark" | "light";
};
export default function TranslatorInterface({ mode }: Props) {
  const [sourceLanguage, setSourceLanguage] = useState("Français");
  const [targetLanguage, setTargetLanguage] = useState("Yemba");
  const [sourceAnchorEl, setSourceAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [targetAnchorEl, setTargetAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [onglet, setOnglet] = React.useState(1);

  const handleSourceClick = (event: React.MouseEvent<HTMLElement>) => {
    setSourceAnchorEl(event.currentTarget);
  };

  const handleTargetClick = (event: React.MouseEvent<HTMLElement>) => {
    setTargetAnchorEl(event.currentTarget);
  };

  const handleSourceClose = () => {
    setSourceAnchorEl(null);
  };

  const handleTargetClose = () => {
    setTargetAnchorEl(null);
  };

  const [dataTranslate, setDataTranslate] = useState("");

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value)
  };

  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== '') {
        axios
          .post("https://6cda-102-244-200-98.ngrok-free.app/translate", { text: query })
          .then((response) => {
            setDataTranslate(response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Une erreur s'est produite lors de la traduction.");
          });
      }
    }, 500); // délai en ms avant de faire la requête

    // Nettoyage : si l'utilisateur retape avant 500ms
    return () => clearTimeout(delayDebounce);

  }, [query]);

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          backgroundColor:
            mode === "light"
              ? "rgba(0, 0, 0, 0.01)"
              : "rgba(255, 255, 255, 0.01)",
          py: 4,
        }}
        maxWidth="lg"
      >
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                border: `1px solid ${onglet === 1 ? "#ff6600" : "text.secondary"
                  }`,
                borderRadius: 2,
                cursor: "pointer",
                height: "100%",
              }}
              onClick={() => setOnglet(1)}
            >
              <TranslateIcon
                sx={{
                  color: onglet === 1 ? "#ff6600" : "text.secondary",
                  mr: 2,
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  color={onglet === 1 ? "#ff6600" : "text.secondary"}
                >
                  Traduire le texte
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                cursor: "pointer",
                height: "100%",
                border: `1px solid ${onglet === 2 ? "#ff6600" : "text.secondary"
                  }`,
                color: onglet === 2 ? "#ff6600" : "black",
              }}
              onClick={() => setOnglet(2)}
            >
              <DocumentIcon
                sx={{
                  color: onglet === 2 ? "#ff6600" : "text.secondary",
                  mr: 2,
                }}
              />
              <Box>
                <Typography
                  color={onglet === 2 ? "#ff6600" : "text.secondary"}
                  variant="subtitle1"
                  fontWeight={500}
                >
                  Traduire des fichiers
                </Typography>
                <Typography
                  variant="body2"
                  color={onglet === 2 ? "#ff6600" : "text.secondary"}
                >
                  .pdf, .docx, .pptx
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                cursor: "pointer",
                height: "100%",
                border: `1px solid ${onglet === 3 ? "#ff6600" : "gray"}`,
              }}
              onClick={() => setOnglet(3)}
            >
              <AudioFile
                sx={{
                  color: onglet === 3 ? "#ff6600" : "text.secondary",
                  mr: 2,
                }}
              />
              <Box>
                <Typography
                  color={onglet === 3 ? "#ff6600" : "text.secondary"}
                  variant="subtitle1"
                  fontWeight={500}
                >
                  Audio
                </Typography>
                <Typography
                  color={onglet === 3 ? "#ff6600" : "text.secondary"}
                  variant="body2"
                >
                  Parler pour traduire
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Paper
          elevation={0}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderBottom: "1px solid #e0e0e0",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Button
                onClick={handleSourceClick}
                sx={{
                  py: 1.5,
                  px: 2,
                  justifyContent: "space-between",
                  minWidth: 200,
                  borderRadius: 0,
                  color: "text.primary",
                  fontWeight: 500,
                }}
              >
                {sourceLanguage}
              </Button>
              <Menu
                anchorEl={sourceAnchorEl}
                open={Boolean(sourceAnchorEl)}
                onClose={handleSourceClose}
              >
                <MenuItem onClick={handleSourceClose}>Français</MenuItem>
              </Menu>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mx: 1 }}>
              <IconButton
                size="small"
                sx={{ bgcolor: "#f5f5f7", "&:hover": { bgcolor: "#e0e0e0" } }}
              >
                <SwapIcon />
              </IconButton>
            </Box>

            <Box>
              <Button
                onClick={handleTargetClick}
                sx={{
                  py: 1.5,
                  px: 2,
                  justifyContent: "space-between",
                  minWidth: 200,
                  borderRadius: 0,
                  color: "text.primary",
                  fontWeight: 500,
                }}
              >
                {targetLanguage}
              </Button>
              <Menu
                anchorEl={targetAnchorEl}
                open={Boolean(targetAnchorEl)}
                onClose={handleTargetClose}
              >
                <MenuItem onClick={handleTargetClose}>Yemba</MenuItem>
              </Menu>
            </Box>
          </Box>

          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                name="french-text"
                placeholder="Écrivez ou collez votre texte ici."
                type="text"
                multiline
                rows={20}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                  },
                }}
                onChange={onChangeInput}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                name="yemba-text"
                placeholder="Resultat de la traduction"
                type="text"
                multiline
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                rows={20}
                value={dataTranslate}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
