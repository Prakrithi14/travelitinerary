import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const res = await axios.post(
      "http://localhost:5000/user/login",
      user
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login Successful");
    navigate("/dashboard");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );

  }
};
  return (
    <Container maxWidth="sm">

      <Paper
        elevation={4}
        sx={{
          p: 4,
          mt: 8,
          borderRadius: 3
        }}
      >

        <Typography
          variant="h4"
          textAlign="center"
          mb={3}
        >
          Travel Itinerary AI
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>

          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            onChange={handleChange}
          />

          <Button
          type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Login
          </Button>

          <Typography
            textAlign="center"
            mt={2}
          >
            Don't have an account?
            <Link
              to="/register"
              style={{ marginLeft: "5px" }}
            >
              Register
            </Link>
          </Typography>

        </Box>

      </Paper>

    </Container>
  );
}

export default Login;