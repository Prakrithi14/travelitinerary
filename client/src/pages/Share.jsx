import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Paper,
  Typography,
} from "@mui/material";

function Share() {
  const { shareId } = useParams();

  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    fetchItinerary();
  }, []);

  const fetchItinerary = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/travel/share/${shareId}`
      );

      setItinerary(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  if (!itinerary) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Shared Travel Itinerary
        </Typography>

        <Typography
          sx={{
            whiteSpace: "pre-wrap",
            mt: 2,
          }}
        >
          {itinerary.itinerary}
        </Typography>
      </Paper>
    </Container>
  );
}

export default Share;