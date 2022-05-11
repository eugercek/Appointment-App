import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { ActivityTypes } from "../../../types/Login";
import Individual from "./Individual";
import Mass from "./Mass";

const activityTypes = ["Mass", "Individual"];

export default function AddActivity() {
  const [activity, setActivity] = useState<ActivityTypes>("Mass");

  return (
    <Grid container spacing={2} m={10}>
      <Autocomplete
        disablePortal
        id="combo-box"
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
      {activity === "Individual" && <Individual />}
      {activity === "Mass" && <Mass />}
    </Grid>
  );
}
