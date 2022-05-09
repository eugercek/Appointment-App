import { Box, Button, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonCard from "./ButtonCard";

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
          <ButtonCard name="Animator" to="/add/animator/" />
          <ButtonCard name="Equipment Person" to="/add/equipment-person/" />
          <ButtonCard name="Customer" to="/add/customer" />
        </Stack>
      </Box>
    </Grid>
  );
}
