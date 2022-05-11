import {
  Box,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
  Autocomplete,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import loginUser from "../../helpers/auth";
import titleFormat from "../../helpers/title-format";
import { UserRole } from "../../types/Login";

interface ChildProps {
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setRole: React.Dispatch<React.SetStateAction<UserRole>>;
  role: UserRole;
  setUserId: any;
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

export default function LoginPage({
  setToken,
  setRole,
  role,
  setUserId,
}: ChildProps) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const token: string = await loginUser({
        phone,
        password,
        role,
      });

      if (token !== "error") {
        console.log("Token: ", token);
        setToken(token);
        setUserId(token);
      } else {
        setError(true);
      }
    } catch (e: any) {
      setError(true);
      console.log(e.getMessage());
    }
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
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="tel"
              autoFocus
              inputProps={{ maxLength: 10, minLength: 10 }}
              onChange={(e) => setPhone(e.target.value)}
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

        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Login Error
          </Alert>
        )}
      </Grid>
    </Grid>
  );
}
