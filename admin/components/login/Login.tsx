import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import Copyright from "@/components/Copyright";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

/* TODO
 * Add Loading Screen while performing Async Operations like Create User, Sign In
 * Create forgot password page
 * Properly handle errors from async operations
 * 
*/

export default function Login() {
  async function createUser(email: FormDataEntryValue, password: FormDataEntryValue) {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
  
    return data;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const enteredEmail = data.get("email")
    const enteredPassword = data.get("password")

    if (isLogin) {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: enteredEmail,
          password: enteredPassword,
        });
        if (!result?.error) {
          // set some auth state
          router.replace("/admin");
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const result = await createUser(enteredEmail as FormDataEntryValue, enteredPassword as FormDataEntryValue);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [isLogin, setIsLogin] = React.useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isLogin ? "Login" : "Create Account"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" onClick={switchAuthModeHandler}>
                  {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
