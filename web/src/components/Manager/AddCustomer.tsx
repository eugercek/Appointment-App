import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Customer } from "../../types/Login";

const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  customer: Customer
) => {
  e.preventDefault();
  fetch("http://localhost:8080/customer/hi", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export default function AddCustomer() {
  const [customer, setCustomer] = useState<Customer>({} as Customer);

  const handler = (e: any) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  return (
    <Box component="form" onSubmit={(e: any) => handleSubmit(e, customer)}>
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
              disabled
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
              type="tel"
              name="contactPhone"
              variant="standard"
              onChange={handler}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
          Add
        </Button>
      </Stack>
    </Box>
  );
}
