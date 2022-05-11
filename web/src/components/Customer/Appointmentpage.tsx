import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";
import MassActivity from "./MassActivityPage";
import { ActivityTypes } from "../../types/Login";

const activityTypes = ["Mass", "Individual"];

export default function AppointmentScreen({ userId }: { userId: number }) {
  const [activity, setActivity] = useState<ActivityTypes>("Mass");

  console.log(userId);
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
      {activity === "Mass" && <MassActivity customerId={userId} />}
    </Grid>
  );
}
