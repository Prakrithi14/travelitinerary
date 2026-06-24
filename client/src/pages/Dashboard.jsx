import {
  Container,
  Typography,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" mb={3}>
        Travel Itinerary Dashboard
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/upload")}
      >
        Upload Travel Document
      </Button>
    </Container>
  );
}

export default Dashboard;