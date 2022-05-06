import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Animator } from "../../types/Login";

// TODO Bind to backend to fetch expertise areas
const expertiseAreas = ["Animation", "Art", "Design", "Film", "Photography"];

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // TODO Post request
};

export default function AddAnimator() {
  // TODO Add emojis for links
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack m={5} mt={20} alignItems="center">
        <Typography variant="h6" gutterBottom>
          Add Animator
        </Typography>
        <Grid container spacing={3} maxWidth={500}>
          <Grid item xs={12}>
            <TextField
              required
              id="id"
              label="Employee ID"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              label="Name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phoneNumber"
              label="Phone Number"
              fullWidth
              type="tel"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              id="expertise-combo"
              options={expertiseAreas}
              sx={{ width: 300 }}
              renderInput={(params) => (
                // TODO Add multiple expertise areas
                <TextField {...params} label="Expertise Area" />
              )}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
          Add
        </Button>
      </Stack>
    </Box>
  );
}
