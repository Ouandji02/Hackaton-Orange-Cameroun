"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tabs,
  Tab,
  Paper,
  TextField,
  Button,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import {
  Search as SearchIcon,
  SwapHoriz as SwapHorizIcon,
  History as HistoryIcon,
  MenuBook as MenuBookIcon,
  Translate as TranslateIcon,
} from "@mui/icons-material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { dict } from "./dict";

// Création d'un thème Material UI

type Props = {
  mode: "dark" | "light";
};

export default function DictionaryApp({ mode }: Props) {
  const [wordSearchValue, setWordSearchValue] = useState("");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("fr");
  const [targetLanguage, setTargetLanguage] = useState("en");
  const [activeTab, setActiveTab] = useState(0);
  const [searchHistory, setSearchHistory] = useState([
    "bonjour",
    "merci",
    "au revoir",
    "s'il vous plaît",
    "comment ça va",
  ]);
  const theme = useTheme();
  const [wordSearch, setWordSearch] = useState<any>();

  // Simulated results for demonstration
  const wordResult = wordSearch
    ? {
        word: wordSearch.mot,
        phonetic: wordSearch.forme,
        translations: [
          {
            pos: "nom",
            meanings: wordSearch.traductions ?? [],
          },
          { pos: "verbe", meanings: [] },
        ],
        examples: [
          "Voici un exemple de phrase avec ce mot.",
          "Un autre exemple d'utilisation.",
        ],
        conjugaisons: wordSearch.conjugaisons,
      }
    : null;

  const handleWordSearch = () => {
    if (wordSearchValue && !searchHistory.includes(wordSearchValue)) {
      setSearchHistory([wordSearchValue, ...searchHistory].slice(0, 5));
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  React.useEffect(() => {
    if (wordSearchValue) {
      const find = dict.find((item) => item.mot === wordSearchValue);
      if (find) {
        setWordSearch(find);
      } else {
        setWordSearch(null);
      }
    }
  }, [wordSearchValue]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderRadius: 2, mb: 4 }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="h1"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              Dictionnaire Yemba
            </Typography>
          </Toolbar>
        </AppBar>

        <Paper elevation={2} sx={{ borderRadius: 2, overflow: "hidden" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              icon={<MenuBookIcon />}
              label="Dictionnaire"
              iconPosition="start"
            />
          </Tabs>

          {/* Dictionnaire Tab */}
          {activeTab === 0 && (
            <Box p={3}>
              <Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Rechercher un mot
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Entrez un mot pour obtenir sa définition et sa traduction
                </Typography>

                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                  <TextField
                    fullWidth
                    placeholder="Entrez un mot..."
                    value={wordSearchValue}
                    onChange={(e) => {
                      setWordSearchValue(e.target.value);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleWordSearch()}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleWordSearch}
                  >
                    Rechercher
                  </Button>
                </Box>

                {searchHistory.length > 0 && (
                  <Box sx={{ mt: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <HistoryIcon
                        fontSize="small"
                        sx={{ mr: 1, color: "text.secondary" }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        Recherches récentes
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {searchHistory.map((word, index) => (
                        <Chip
                          key={index}
                          label={word}
                          onClick={() => setWordSearchValue(word)}
                          variant="outlined"
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </Paper>

              {wordResult && (
                <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" component="h2">
                      {wordResult.word}
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1 }}
                      >
                        {wordResult.phonetic}
                      </Typography>
                    </Typography>
                  </Box>

                  {wordResult.translations.map((translation, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {translation.pos}
                      </Typography>
                      <List dense disablePadding>
                        {translation.meanings.map((meaning, i) => (
                          <ListItem key={i} sx={{ pl: 2 }}>
                            <ListItemText
                              primary={meaning}
                              primaryTypographyProps={{
                                component: "div",
                                variant: "body1",
                                sx: {
                                  "&::before": {
                                    content: '"• "',
                                  },
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}

                  <Divider sx={{ my: 2 }} />

                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Conjugaisons
                    </Typography>
                    <List dense disablePadding>
                      {wordResult.conjugaisons.map((example, i) => (
                        <ListItem key={i} sx={{ pl: 2 }}>
                          <ListItemText
                            primary={`${example.mode} : ${example.forme}`}
                            primaryTypographyProps={{
                              component: "div",
                              variant: "body1",
                              sx: {
                                fontStyle: "italic",
                                "&::before": {
                                  content: '"• "',
                                },
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Divider sx={{ my: 2 }} />
                </Paper>
              )}
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
