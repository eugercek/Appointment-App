import { Box, Grid, Stack } from "@mui/material";
import ButtonCard from "../ButtonCard";

export default function AddPage() {
  // TODO Add emojis for links
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
    >
      <Box textAlign="center">
        <Stack spacing={5} direction={"row"}>
          <ButtonCard name="Animator" to="/add/animator/" text="Add" />
          <ButtonCard
            name="Equipment Person"
            to="/add/equipment-person/"
            text="Add"
          />
          <ButtonCard name="Customer" to="/add/customer" text="Add" />
        </Stack>
      </Box>
    </Grid>
  );
}
