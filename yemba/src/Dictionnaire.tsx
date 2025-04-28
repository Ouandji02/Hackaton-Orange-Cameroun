"use client";

import { useState } from "react";
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

  // Simulated results for demonstration
  const wordResult = wordSearchValue
    ? {
        word: wordSearchValue,
        phonetic: "/example/",
        translations: [
          {
            pos: "nom",
            meanings: ["example translation 1", "example translation 2"],
          },
          { pos: "verbe", meanings: ["example verb translation"] },
        ],
        examples: [
          "Voici un exemple de phrase avec ce mot.",
          "Un autre exemple d'utilisation.",
        ],
      }
    : null;

  const translatedText = textToTranslate
    ? "This is where the translated text would appear. The actual translation functionality would need to be implemented with an API."
    : "";

  const handleWordSearch = () => {
    if (wordSearchValue && !searchHistory.includes(wordSearchValue)) {
      setSearchHistory([wordSearchValue, ...searchHistory].slice(0, 5));
    }
  };

  const handleSwapLanguages = () => {
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

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
              Dictionnaire
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
                    onChange={(e) => setWordSearchValue(e.target.value)}
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
                      Exemples
                    </Typography>
                    <List dense disablePadding>
                      {wordResult.examples.map((example, i) => (
                        <ListItem key={i} sx={{ pl: 2 }}>
                          <ListItemText
                            primary={example}
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
                </Paper>
              )}
            </Box>
          )}

          {/* Traducteur Tab */}
          {activeTab === 1 && (
            <Box p={3}>
              <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Traduire du texte
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Entrez du texte pour le traduire d'une langue à une autre
                </Typography>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, my: 3 }}
                >
                  <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel id="source-language-label">
                      Langue source
                    </InputLabel>
                    <Select
                      labelId="source-language-label"
                      value={sourceLanguage}
                      label="Langue source"
                      onChange={(e) => setSourceLanguage(e.target.value)}
                    >
                      <MenuItem value="fr">Français</MenuItem>
                      <MenuItem value="en">Anglais</MenuItem>
                      <MenuItem value="es">Espagnol</MenuItem>
                      <MenuItem value="de">Allemand</MenuItem>
                      <MenuItem value="it">Italien</MenuItem>
                    </Select>
                  </FormControl>

                  <IconButton
                    onClick={handleSwapLanguages}
                    color="primary"
                    sx={{ p: 1 }}
                  >
                    <SwapHorizIcon />
                  </IconButton>

                  <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel id="target-language-label">
                      Langue cible
                    </InputLabel>
                    <Select
                      labelId="target-language-label"
                      value={targetLanguage}
                      label="Langue cible"
                      onChange={(e) => setTargetLanguage(e.target.value)}
                    >
                      <MenuItem value="en">Anglais</MenuItem>
                      <MenuItem value="fr">Français</MenuItem>
                      <MenuItem value="es">Espagnol</MenuItem>
                      <MenuItem value="de">Allemand</MenuItem>
                      <MenuItem value="it">Italien</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Texte à traduire
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={8}
                      placeholder="Entrez votre texte ici..."
                      value={textToTranslate}
                      onChange={(e) => setTextToTranslate(e.target.value)}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Traduction
                    </Typography>
                    <Paper
                      variant="outlined"
                      sx={{
                        height: "100%",
                        minHeight: "195px",
                        p: 2,
                        bgcolor: "action.hover",
                        display: "flex",
                        alignItems: translatedText ? "flex-start" : "center",
                        justifyContent: translatedText
                          ? "flex-start"
                          : "center",
                      }}
                    >
                      {translatedText ? (
                        <Typography>{translatedText}</Typography>
                      ) : (
                        <Typography color="text.secondary">
                          La traduction apparaîtra ici...
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                </Grid>

                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!textToTranslate}
                  >
                    Traduire
                  </Button>
                </Box>
              </Paper>
            </Box>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
