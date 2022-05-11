import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";
import AddActivity from "./Activity/AddActivity";
import EmergencyPage from "./EmergencyPage";
import EquipmentPage from "./EquipmentPage";

const options = ["Activity", "Emergency", "Equipment"];

export default function AnimatorPage() {
  const [selection, setSelection] = useState<
    "Activity" | "Emergency" | "Equipment"
  >("Activity");

  return (
    <Grid p={5}>
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
      {selection === "Activity" && <AddActivity />}
      {selection === "Emergency" && <EmergencyPage />}
      {selection === "Equipment" && <EquipmentPage />}
    </Grid>
  );
}
