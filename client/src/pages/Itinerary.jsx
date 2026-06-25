import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";

function Itinerary() {
  const location = useLocation();
  const navigate = useNavigate();

  const itinerary = location.state?.itinerary;

  if (!itinerary) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography>No itinerary found.</Typography>

        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
        >
          ✈️ Generated Itinerary
        </Typography>

        <Typography
          sx={{
            whiteSpace: "pre-wrap",
            mt: 3,
            lineHeight: 1.8,
          }}
        >
          {itinerary}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/history")}
          >
            View History
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Itinerary;