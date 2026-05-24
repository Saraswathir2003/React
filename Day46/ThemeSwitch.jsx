import { Switch, FormControlLabel, Typography, Box } from "@mui/material";

function ThemeSwitch({ darkMode, setDarkMode }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Typography>

      <FormControlLabel
        control={
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        }
        label="Toggle Theme"
      />
    </Box>
  );
}

export default ThemeSwitch;
