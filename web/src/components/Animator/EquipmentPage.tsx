import { Alert, AlertTitle, Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

import { Equipment } from "../../types/Login";

export default function EquipmentPage() {
  const [error, setError] = useState<false>(false);

  const [state, setState] = useState<Equipment>({} as Equipment);

  const handler = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Grid
      container
      spacing={2}
      m={10}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        component="form"
        onSubmit={(e: any) => handleSubmit(e, state, setError)}
      >
        <Grid item xs={12} mt={3}>
          <TextField
            required
            id="ssn"
            label="SSN"
            type="number"
            fullWidth
            variant="standard"
            name="equipPersonSsn"
            onChange={handler}
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <TextField
            required
            id="phone"
            label="Name"
            fullWidth
            variant="standard"
            name="name"
            onChange={handler}
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <TextField
            required
            id="phone"
            label="Purpose"
            fullWidth
            variant="standard"
            name="purpose"
            onChange={handler}
          />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 5, mb: 3 }}
        >
          Add Equipment
        </Button>
      </Box>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          An error ocurred while adding your equipment
        </Alert>
      )}
    </Grid>
  );
}

async function handleSubmit(e: any, equipment: Equipment, setError: any) {
  e.preventDefault();

  console.log(equipment);
  const response = await fetch("http://localhost:8080/equipment/", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipment),
  });

  if (response.status === 200) {
    console.log("Success");
    setError(false);
  } else {
    setError(true);
    console.log("Error!!!!!");
  }
}
