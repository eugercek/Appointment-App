import {
  Alert,
  AlertTitle,
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useInsertionEffect, useState } from "react";

import { Animator } from "../../types/Login";

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  animator: Animator,
  setError: any
) => {
  e.preventDefault();
  const response = await fetch("http://localhost:8080/animators", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animator),
  });

  if (response.status === 200) {
    console.log("Success");
    setError(false);
  } else {
    setError(true);
    console.log("Error!!!!!");
  }
};

export default function AddAnimator() {
  const [animator, setAnimator] = useState<Animator>({} as Animator);
  const [error, setError] = useState<false>(false);
  const [expertiseAreas, setExpertiseAreas] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/animators/expertises")
      .then((res) => res.json())
      .then((res) => setExpertiseAreas(res));
  }, []);

  const handler = (e: any) => {
    setAnimator({ ...animator, [e.target.name]: e.target.value });
  };

  // TODO Add emojis for links
  return (
    <Box
      component="form"
      onSubmit={(e: any) => handleSubmit(e, animator, setError)}
    >
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
              variant="standard"
              name="phoneNumber"
              onChange={handler}
              inputProps={{ maxLength: 10, minLength: 10 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              id="expertise-combo"
              // TODO ZORT any
              options={expertiseAreas}
              getOptionLabel={(option: any) => option.name}
              sx={{ width: 300 }}
              onChange={(event, newValue: any) => {
                setAnimator((p) => ({ ...p, expertiseArea: newValue.id }));
              }}
              renderInput={(params) => (
                // TODO Add multiple expertise areas
                <TextField
                  {...params}
                  label="Expertise Area"
                  name="expertiseArea"
                />
              )}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
          Add
        </Button>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            An error ocurred, please try again.
          </Alert>
        )}
      </Stack>
    </Box>
  );
}
