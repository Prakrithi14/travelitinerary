// import {
//   Container,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Box
// } from "@mui/material";
// import axios from "axios";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {

//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });
// const navigate = useNavigate();
//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {

//     const res = await axios.post(
//       "http://localhost:5000/user/login",
//       user
//     );

//     localStorage.setItem(
//       "token",
//       res.data.token
//     );

//     alert("Login Successful");
//     navigate("/dashboard");

//   } catch (error) {

//     alert(
//       error.response?.data?.message ||
//       "Login Failed"
//     );

//   }
// };
//   return (
//     <Container maxWidth="sm">

//       <Paper
//         elevation={4}
//         sx={{
//           p: 4,
//           mt: 8,
//           borderRadius: 3
//         }}
//       >

//         <Typography
//           variant="h4"
//           textAlign="center"
//           mb={3}
//         >
//           Travel Itinerary AI
//         </Typography>

//         <Box component="form" onSubmit={handleSubmit}>

//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             fullWidth
//             margin="normal"
//             onChange={handleChange}
//           />

//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             fullWidth
//             margin="normal"
//             onChange={handleChange}
//           />

//           <Button
//           type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ mt: 3 }}
//           >
//             Login
//           </Button>

//           <Typography
//             textAlign="center"
//             mt={2}
//           >
//             Don't have an account?
//             <Link
//               to="/register"
//               style={{ marginLeft: "5px" }}
//             >
//               Register
//             </Link>
//           </Typography>

//         </Box>

//       </Paper>

//     </Container>
//   );
// }

// export default Login;
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
      localStorage.setItem("token", res.data.token);
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
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f0fdf4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #d1fae5",
            boxShadow: "0 8px 40px rgba(16,185,129,0.12)",
          }}
        >
         
          <Box
            sx={{
              background: "linear-gradient(120deg, #059669 0%, #10b981 60%, #34d399 100%)",
              px: 4,
              pt: 4,
              pb: 3,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 24,
                right: 24,
                width: 48,
                height: 48,
                borderRadius: "12px",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              
            </Box>

            <Typography
              sx={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Travel Itinerary AI
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: 700, fontSize: "22px", mt: 0.5 }}
            >
              Welcome back 👋
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px", mt: 0.5 }}
            >
              Sign in to continue planning your adventures
            </Typography>
          </Box>

          
          <Box sx={{ px: 4, pt: 3, pb: 4, background: "#fff" }}>
            <Box component="form" onSubmit={handleSubmit}>

              <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#065f46", textTransform: "uppercase", letterSpacing: "0.06em", mb: 0.6 }}>
                Email Address
              </Typography>
              <TextField
                name="email"
                type="email"
                fullWidth
                margin="none"
                placeholder="jane@example.com"
                onChange={handleChange}
                
              />

              <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#065f46", textTransform: "uppercase", letterSpacing: "0.06em", mb: 0.6, mt: 2 }}>
                Password
              </Typography>
              <TextField
                name="password"
                type="password"
                fullWidth
                margin="none"
                placeholder="••••••••"
                onChange={handleChange}
                
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.4,
                  borderRadius: "10px",
                  background: "#059669",
                  fontWeight: 600,
                  fontSize: "15px",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#047857",
                    boxShadow: "none",
                  },
                }}
              >
                Login →
              </Button>

              <Typography textAlign="center" mt={2} fontSize="13px" color="#6b7280">
                Don't have an account?
                <Link
                  to="/register"
                  style={{ marginLeft: "5px", color: "#059669", fontWeight: 600, textDecoration: "none" }}
                >
                  Register
                </Link>
              </Typography>

            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}



export default Login;