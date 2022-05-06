import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { EquipmentPerson } from "../../types/Login";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // TODO Post request
};

export default function AddEquipmentPerson() {
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack m={5} mt={20} alignItems="center">
        <Typography variant="h6" gutterBottom>
          Add Equipment Person
        </Typography>
        <Grid container spacing={3} maxWidth={500}>
          <Grid item xs={12}>
            <TextField
              required
              id="ssn"
              label="SSN"
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
              id="surname"
              label="Surname"
              fullWidth
              type="tel"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="contact_phone"
              label="Contact Phone"
              fullWidth
              type="tel"
              variant="standard"
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
