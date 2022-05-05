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

interface User {
  name: string;
  role: UserRole;
}

enum UserRole {
  Worker = "Worker",
  Customer = "Customer",
}

const users: User[] = [
  {
    name: "Manager",
    role: UserRole.Worker,
  },
  {
    name: "Animator",
    role: UserRole.Worker,
  },
  {
    name: "Customer",
    role: UserRole.Customer,
  },
];

function Login() {
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
          <Autocomplete
            id="grouped-demo"
            options={users.sort((a, b) => b.role[0].localeCompare(a.role[0]))}
            groupBy={(option) => option.role}
            getOptionLabel={(option) => option.name}
            sx={{ mt: 5 }}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="User Type" />
            )}
            defaultValue={users.at(-1)}
          />
          <Box
            component="form"
            noValidate
            onSubmit={() => console.log()}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
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

export default Login;
