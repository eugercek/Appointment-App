import {
  Box,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
  Autocomplete,
} from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import loginUser from "../../helpers/auth";
import titleFormat from "../../helpers/title-format";
import { UserRole } from "../../types/Login";

interface ChildProps {
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setRole: React.Dispatch<React.SetStateAction<UserRole>>;
}

const users: { name: UserRole; type: "Worker" | "Client" }[] = [
  {
    name: UserRole.Manager,
    type: "Worker",
  },
  {
    name: UserRole.Animator,
    type: "Worker",
  },
  {
    name: UserRole.Customer,
    type: "Client",
  },
];

export default function LoginPage({ setToken, setRole }: ChildProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // const token = await loginUser({
    //   email,
    //   password,
    //   role,
    // });
    setToken(`${email}:${password}`);
    // TODO Bind with backend
    // const token = await loginUser({
    //   email,
    //   password,
    //   role,
    // });
    // console.log(role);
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/images/home.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Autocomplete
              id="grouped-demo"
              options={users.sort((a, b) => b.type[0].localeCompare(a.type[0]))}
              groupBy={(option) => option.type}
              getOptionLabel={(option) => titleFormat(option.name)}
              sx={{ mt: 5 }}
              fullWidth
              renderInput={(params) => (
                <TextField {...params} label="User Type" />
              )}
              defaultValue={users.at(-1)}
              onChange={(event, newValue) => {
                if (newValue) {
                  setRole(UserRole.Customer);
                }
                setRole(newValue?.name as UserRole);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 5, mb: 3 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
