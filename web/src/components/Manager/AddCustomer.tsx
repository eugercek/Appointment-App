import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Customer } from "../../types/Login";

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  customer: Customer,
  setError: any
) => {
  e.preventDefault();
  const response = await fetch("http://localhost:8080/customers", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  if (response.status === 200) {
    console.log("Success");
    setError(false);
  } else {
    setError(true);
    console.log("Error!!!!!");
  }
};

export default function AddCustomer() {
  const [customer, setCustomer] = useState<Customer>({} as Customer);
  const [error, setError] = useState<false>(false);

  const handler = (e: any) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      onSubmit={(e: any) => handleSubmit(e, customer, setError)}
    >
      <Stack m={5} mt={20} alignItems="center">
        <Typography variant="h6" gutterBottom>
          Add Customer
        </Typography>
        <Grid container spacing={3} maxWidth={500}>
          <Grid item xs={12}>
            <TextField
              required
              id="id"
              label="Vacation Village ID"
              fullWidth
              variant="standard"
              type="number"
              name="id"
              onChange={handler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              label="Name"
              fullWidth
              variant="standard"
              name="name"
              onChange={handler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="age"
              label="Age"
              fullWidth
              type="number"
              name="age"
              variant="standard"
              onChange={handler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="room_no"
              label="Room Number"
              fullWidth
              type="number"
              name="roomNumber"
              variant="standard"
              onChange={handler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="contact_phone"
              label="Contact Phone"
              fullWidth
              type="number"
              name="contactPhone"
              variant="standard"
              onChange={handler}
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
          Add
        </Button>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            An error ocurred, please try again.
          </Alert>
        )}
      </Stack>
    </Box>
  );
}
