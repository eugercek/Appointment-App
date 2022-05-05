import {
  Autocomplete,
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// TODO Bind to backend to fetch expertise areas
const expertiseAreas = ["Animation", "Art", "Design", "Film", "Photography"];

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("hi");
};

export default function AddAnimator() {
  // TODO Add emojis for links
  return (
    <Box component="form" onSubmit={(e: any) => console.log(e)}>
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
      </Stack>
    </Box>
  );
}
