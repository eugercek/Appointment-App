import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";
import MassActivity from "./MassActivity";
import { ActivityTypes } from "../../types/Login";

const activityTypes = ["Mass", "Individual"];

export default function AppointmentScreen() {
  const [activity, setActivity] = useState<ActivityTypes>("Mass");

  return (
    <Grid container spacing={2} m={10}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={activityTypes}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Activity Type" />
        )}
        value={activity}
        onChange={(event, newValue: any) => {
          setActivity(newValue);
        }}
      />
      {activity === "Mass" && <MassActivity />}
    </Grid>
  );
}
