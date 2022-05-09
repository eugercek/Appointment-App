import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function MassActivity({}) {
  const [state, setState] = useState({});

  const handler = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Grid container spacing={3} maxWidth={500} ml={20}>
      <Grid item xs={12}>
        <TextField
          required
          id="activity-type"
          label="Activity Type"
          fullWidth
          variant="standard"
          name="activityType"
          onChange={handler}
        />
      </Grid>
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
        <Grid mt={10}>
          <TextField
            id="date"
            label="Date"
            type="date"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handler}
          />
        </Grid>
        <Grid mt={10}>
          <TextField
            id="hour"
            label="Hour"
            type="time"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handler}
          />
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
          Make Appointment
        </Button>
      </Grid>
    </Grid>
  );
}
