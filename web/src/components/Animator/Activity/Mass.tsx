import { Button, Grid, TextField, Alert, AlertTitle } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { MassActivity } from "../../../types/Login";

export default function Mass() {
  const [state, setState] = useState<MassActivity>({} as MassActivity);
  const [error, setError] = useState<false>(false);

  const handler = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      onSubmit={(e: any) => handleSubmit(e, state, setError)}
    >
      <Grid container spacing={3} maxWidth={500} ml={20}>
        <Grid item xs={12}>
          <TextField
            required
            id="date"
            label="Name"
            fullWidth
            variant="standard"
            name="name"
            onChange={handler}
          />
          <TextField
            required
            id="date"
            label="Internet Link"
            fullWidth
            variant="standard"
            name="internetLink"
            onChange={handler}
          />
          <TextField
            required
            id="date"
            label="Capacity"
            fullWidth
            variant="standard"
            type="number"
            name="capacity"
            onChange={handler}
          />
          <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
            Add Mass Activity
          </Button>
        </Grid>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Login Error
          </Alert>
        )}
      </Grid>
    </Box>
  );
}

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  activity: MassActivity,
  setError: any
) => {
  e.preventDefault();

  const response = await fetch("http://localhost:8080/activity/mass", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activity),
  });

  if (response.status === 200) {
    console.log("Success");
    setError(false);
  } else {
    setError(true);
    console.log("Error!!!!!");
  }
};
