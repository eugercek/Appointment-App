import { Box, Button, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function AddPage() {
  // TODO Add emojis for links
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
    >
      <Box textAlign="center">
        <Stack spacing={5}>
          <Button size="large" style={{ textTransform: "none" }}>
            <Link to="/add/animator"> Add Animator</Link>
          </Button>
          <Button size="large" style={{ textTransform: "none" }}>
            <Link to="/add/equipment-person">Add Equipment Person </Link>
          </Button>
          <Button size="large" style={{ textTransform: "none" }}>
            <Link to="/add/customer"> Add Customer</Link>
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
