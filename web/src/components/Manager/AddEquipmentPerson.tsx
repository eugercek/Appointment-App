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
import { EquipmentPerson } from "../../types/Login";

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  equipmentPerson: EquipmentPerson,
  setError: any
) => {
  e.preventDefault();
  const response = await fetch("http://localhost:8080/equip-persons", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipmentPerson),
  });

  if (response.status === 200) {
    console.log("Success");
    setError(false);
  } else {
    setError(true);
    console.log("Error!!!!!");
  }
};

export default function AddEquipmentPerson() {
  const [equipmentPerson, setEquipmentPerson] = useState<EquipmentPerson>(
    {} as EquipmentPerson
  );

  const [error, setError] = useState<false>(false);

  const handler = (e: any) => {
    setEquipmentPerson({ ...equipmentPerson, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      onSubmit={(e: any) => handleSubmit(e, equipmentPerson, setError)}
    >
      <Stack m={5} mt={20} alignItems="center">
        <Typography variant="h6" gutterBottom>
          Add Equipment Person
        </Typography>
        <Grid container spacing={3} maxWidth={500}>
          <Grid item xs={12}>
            <TextField
              required
              id="ssn"
              label="SSN"
              fullWidth
              variant="standard"
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
              id="surname"
              label="Surname"
              fullWidth
              type="tel"
              variant="standard"
              name="surname"
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
              variant="standard"
              name="contactPhone"
              onChange={handler}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 5, mb: 3 }}>
          Add
        </Button>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            An error ocurred, please try again. Customer not added.
          </Alert>
        )}
      </Stack>
    </Box>
  );
}
