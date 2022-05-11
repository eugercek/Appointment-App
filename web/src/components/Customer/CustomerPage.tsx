import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";
import AppointmentPage from "./Appointmentpage";
import ChildrenActivities from "./ChildrenActivities";

const options = ["Appointment", "Children"];

export default function CustomerPage({ userId }: { userId: number }) {
  const [selection, setSelection] = useState<"Appointment" | "Children">(
    "Appointment"
  );

  return (
    <Grid p={5}>
      <h1> Hi</h1>
      <Autocomplete
        disablePortal
        id="combo-box"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Choose Operation" />
        )}
        value={selection}
        onChange={(event, newValue: any) => {
          setSelection(newValue);
        }}
      />
      <Grid mt={2}>{selection === "Children" && <ChildrenActivities />}</Grid>
      <Grid mt={2}>
        {selection === "Appointment" && <AppointmentPage userId={userId} />}
      </Grid>
    </Grid>
  );
}
