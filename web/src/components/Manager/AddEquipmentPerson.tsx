import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { EquipmentPerson } from "../../types/Login";

const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  equipmentPerson: EquipmentPerson
) => {
  fetch("http://localhost:8080/add/equip-person", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipmentPerson),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export default function AddEquipmentPerson() {
  const [equipmentPerson, setEquipmentPerson] = useState<EquipmentPerson>(
    {} as EquipmentPerson
  );

  const handler = (e: any) => {
    setEquipmentPerson({ ...equipmentPerson, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      onSubmit={(e: any) => handleSubmit(e, equipmentPerson)}
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
              name="ssn"
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
              name="phone"
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
