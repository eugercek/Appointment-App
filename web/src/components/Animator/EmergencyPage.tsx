import {
  Alert,
  AlertTitle,
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Activity, Emergency } from "../../types/Login";

export default function EmergencyPage() {
  const [activities, setActivities] = useState<Activity[]>([] as Activity[]);
  const [selected, setSelected] = useState<Activity | null>(null);
  const [error, setError] = useState<false>(false);

  const [state, setState] = useState<Emergency>({} as Emergency);

  const handler = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Cool :)
    getActivities().then(setActivities);
  }, []);

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
        onSubmit={(e: any) =>
          handleSubmit(
            e,
            { ...state, activityId: selected?.id } as Emergency,
            setError
          )
        }
      >
        <Autocomplete
          id="grouped-demo"
          options={activities.sort((a, b) =>
            b.name[0].localeCompare(a.name[0])
          )}
          getOptionLabel={(option) => option.name}
          sx={{ mt: 5 }}
          renderInput={(params) => <TextField {...params} label="Activity" />}
          defaultValue={selected}
          onChange={(event, newValue) => {
            setSelected(newValue);
          }}
        />
        <Grid item xs={12} mt={3}>
          <TextField
            required
            id="phone"
            label="Phone number"
            fullWidth
            variant="standard"
            name="phoneNumber"
            inputProps={{ maxLength: 10, minLength: 10 }}
            onChange={handler}
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <TextField
            required
            id="phone"
            label="Locker Number"
            fullWidth
            variant="standard"
            name="lockerNumber"
            onChange={handler}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 5, mb: 3 }}
          >
            Add Emergency Information
          </Button>
        </Grid>
      </Box>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          An error ocurred while adding your emergency information.
        </Alert>
      )}
    </Grid>
  );
}

async function getActivities() {
  const response = await fetch("http://localhost:8080/emergency/activities");
  return response.json();
}

async function handleSubmit(e: any, emergency: Emergency, setError: any) {
  e.preventDefault();

  const response = await fetch("http://localhost:8080/emergency/", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emergency),
  });

  if (response.status === 200) {
    console.log("Success");
    setError(false);
  } else {
    setError(true);
    console.log("Error!!!!!");
  }
  console.log(emergency);
}
