import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { Animator } from "../../types/Login";

// TODO Bind to backend to fetch expertise areas
const expertiseAreas = ["Animation", "Art", "Design", "Film", "Photography"];

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  animator: Animator
) => {
  e.preventDefault();
  const response = await fetch("http://localhost:8080/customer/1");
  const customers = await response.json();
  console.log(customers);
};

export default function AddAnimator() {
  const [animator, setAnimator] = useState<Animator>({} as Animator);

  const handler = (e: any) => {
    setAnimator({ ...animator, [e.target.name]: e.target.value });
  };

  // TODO Add emojis for links
  return (
    <Box component="form" onSubmit={(e: any) => handleSubmit(e, animator)}>
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
              name="id"
              onChange={handler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              label="Name"
              fullWidth
              variant="standard"
              name="name"
              onChange={handler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phoneNumber"
              label="Phone Number"
              fullWidth
              type="number"
              variant="standard"
              name="phone"
              onChange={handler}
              inputProps={{ maxLength: 10 }}
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
                <TextField
                  {...params}
                  label="Expertise Area"
                  name="expertise"
                  onChange={handler}
                />
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
