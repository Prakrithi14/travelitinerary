import { useState } from "react";
import axios from "axios";

import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();

    formData.append("document", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/travel/upload",
        formData
      );

      alert(res.data.message);

      console.log(res.data);

    } catch (error) {
      console.log(error);

      alert("Upload Failed");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper
        elevation={3}
        sx={{
          p: 5,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Upload Travel Document
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
        >
          Upload flight tickets, hotel bookings,
          train tickets, bus tickets, or any
          travel-related document.
        </Typography>

        <Box>

          <Button
            variant="contained"
            component="label"
            size="large"
          >
            Choose File

            <input
              hidden
              type="file"
              accept=".pdf,image/*"
              onChange={handleFileChange}
            />
          </Button>

          {file && (
            <Typography sx={{ mt: 3 }}>
              Selected File:
              <strong> {file.name}</strong>
            </Typography>
          )}

          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3 }}
            onClick={handleUpload}
          >
            Upload File
          </Button>

        </Box>
      </Paper>
    </Container>
  );
}

export default Upload;