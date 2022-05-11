import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState } from "react";
import ChildrenActivities from "./ChildrenActivities";

const options = ["Children"];

export default function CustomerPage() {
  const [selection, setSelection] = useState<"Children">("Children");

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
    </Grid>
  );
}
