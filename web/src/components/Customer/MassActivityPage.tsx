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

type MassResponse = [name: string, capacity: number, id: number];

export default function MassActivityPage({
  customerId,
}: {
  customerId: number;
}) {
  const [error, setError] = useState<boolean>(false);
  const [activities, setActivities] = useState<MassResponse[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const [capacity, setCapacity] = useState<number>(0);
  const [hour, setHour] = useState<string>("");
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    fetchMassActivities()
      .then(setActivities)
      .catch((e) => setError(true));
  }, []);

  return (
    <Grid container spacing={3} maxWidth={500} ml={20}>
      <Box
        component="form"
        onSubmit={(e: any) =>
          handleSubmit(e, customerId, selected, hour, date, setError)
        }
      >
        <Grid item xs={12}>
          <Autocomplete
            id="grouped-demo"
            options={activities.sort((a, b) => a[0].localeCompare(b[0]))}
            getOptionLabel={(option) => option[0]}
            sx={{ mt: 5 }}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="Activity Type" />
            )}
            onChange={(event, newValue: any) => {
              if (newValue) {
                // TODO Clean here
                setSelected(newValue?.[2]);
                setCapacity(newValue?.[1]);
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid mt={10}>
            <TextField
              id="date"
              label="Date"
              type="date"
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setDate(e.target.value)}
            />
          </Grid>
          <Grid mt={10}>
            <TextField
              label="Hour"
              id="hour"
              type="time"
              onChange={(e) => setHour(e.target.value)}
            />
          </Grid>
          {capacity > 0 && (
            <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
              Make Appointment
            </Button>
          )}
        </Grid>
      </Box>
      {capacity < 0 && (
        <Alert severity="warning">
          <AlertTitle>You can't make appointment</AlertTitle>
          Capacity is not enough
        </Alert>
      )}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Can not make appointment
        </Alert>
      )}
    </Grid>
  );
}

async function fetchMassActivities() {
  const response = await fetch("http://localhost:8080/activity/mass");
  return response.json();
}

async function handleSubmit(
  e: any,
  customerId: number,
  activityId: number,
  hour: string,
  date: string,
  setError: any
) {
  e.preventDefault();

  const onlyHour = hour.split(":")[0];
  const iso = new Date(date).toISOString();

  const response = await fetch("http://localhost:8080/activity/appointment", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customerId, activityId, date: iso, hour: onlyHour }),
  });

  if (response.status === 200) {
    console.log("Success");
    setError(false);
  } else {
    setError(true);
    console.log("Error!!!!!");
  }
}
