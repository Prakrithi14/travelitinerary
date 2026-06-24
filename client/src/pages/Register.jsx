import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material";
import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

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
      "http://localhost:5000/user/register",
      user
    );

    alert(res.data.message);

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Registration Failed"
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
          Register
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>

          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            onChange={handleChange}
          />

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
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            type="submit"
          >
            Register
          </Button>
<Typography
  textAlign="center"
  mt={2}
>
  Already have an account?
  <Link
    to="/"
    style={{ marginLeft: "5px" }}
  >
    Login
  </Link>
</Typography>
        </Box>

      </Paper>

    </Container>
  );
}

export default Register;