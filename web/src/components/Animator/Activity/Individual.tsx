import { Button, Grid, TextField, Alert, AlertTitle } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { IndividualActivity } from "../../../types/Login";

export default function Individual() {
  const [state, setState] = useState<IndividualActivity>(
    {} as IndividualActivity
  );
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
            label="Age Requirement"
            fullWidth
            variant="standard"
            type="number"
            name="ageRequirement"
            onChange={handler}
          />
          <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
            Add Individual Activity
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
  activity: IndividualActivity,
  setError: any
) => {
  e.preventDefault();

  const response = await fetch("http://localhost:8080/activity/individual", {
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
