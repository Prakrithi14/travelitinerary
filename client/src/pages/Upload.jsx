import { useState } from "react";
import axios from "axios";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

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
      setUploading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/travel/upload",
        formData,
        { headers: { Authorization: token } }
      );
      alert(res.data.message);
      console.log(res.data);
      navigate("/itinerary", {
  state: {
    itinerary: res.data.data.itinerary,
  },
});
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#f0fdf4" }}>

      {/* Navbar */}
      <Box
        sx={{
          background: "linear-gradient(120deg, #059669 0%, #10b981 60%, #34d399 100%)",
          px: 4, py: 2,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box sx={{ width: 36, height: 36, borderRadius: "10px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
            ✈️
          </Box>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "17px" }}>
            Travel Itinerary AI
          </Typography>
        </Box>
        <Button
          onClick={() => navigate("/dashboard")}
          sx={{ color: "rgba(255,255,255,0.85)", textTransform: "none", fontWeight: 500, fontSize: "13.5px", "&:hover": { color: "#fff", background: "rgba(255,255,255,0.1)" }, borderRadius: "8px", px: 2 }}
        >
          ← Back to Dashboard
        </Button>
      </Box>

      <Container maxWidth="sm" sx={{ py: 5 }}>
        <Paper elevation={0} sx={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #d1fae5", boxShadow: "0 8px 40px rgba(16,185,129,0.10)" }}>

          {/* Header */}
          <Box sx={{ background: "linear-gradient(120deg, #059669 0%, #10b981 60%, #34d399 100%)", px: 4, pt: 4, pb: 3, position: "relative" }}>
            <Box sx={{ position: "absolute", top: 24, right: 24, fontSize: 40, opacity: 0.3 }}>📄</Box>
            <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Step 1 of 2
            </Typography>
            <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "22px", mt: 0.5 }}>
              Upload Travel Document
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px", mt: 0.5 }}>
              Flight tickets, hotel bookings, train or bus tickets
            </Typography>
          </Box>

          {/* Body */}
          <Box sx={{ px: 4, pt: 3, pb: 4, background: "#fff" }}>

            {/* Drop Zone */}
            <Box
              component="label"
              htmlFor="file-input"
              sx={{
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", gap: 1.5,
                border: "2px dashed",
                borderColor: file ? "#10b981" : "#a7f3d0",
                borderRadius: "14px",
                background: file ? "#f0fdf4" : "#fafffe",
                py: 5, px: 3, cursor: "pointer", transition: "all 0.2s",
                "&:hover": { borderColor: "#10b981", background: "#f0fdf4" },
              }}
            >
              <Box sx={{ fontSize: 40 }}>{file ? "✅" : "📂"}</Box>
              <Typography sx={{ fontWeight: 600, fontSize: "15px", color: "#065f46" }}>
                {file ? file.name : "Click to choose a file"}
              </Typography>
              <Typography sx={{ fontSize: "12.5px", color: "#6b7280" }}>
                Supports PDF, JPG, PNG
              </Typography>
              <input id="file-input" hidden type="file" accept=".pdf,image/*" onChange={handleFileChange} />
            </Box>

            {/* Supported types */}
            <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
              {["✈️ Flight Ticket", "🏨 Hotel Booking", "🚆 Train Ticket", "🚌 Bus Ticket"].map((tag) => (
                <Box key={tag} sx={{ fontSize: "11.5px", color: "#059669", background: "#f0fdf4", border: "1px solid #d1fae5", borderRadius: "20px", px: 1.5, py: 0.4, fontWeight: 500 }}>
                  {tag}
                </Box>
              ))}
            </Box>

            {/* Uploading indicator */}
            {uploading && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2.5, background: "#f0fdf4", border: "1px solid #d1fae5", borderRadius: "10px", px: 2, py: 1.5 }}>
                <CircularProgress size={18} thickness={5} sx={{ color: "#059669" }} />
                <Typography sx={{ fontSize: "13.5px", color: "#059669", fontWeight: 600 }}>
                  Uploading & extracting data, please wait...
                </Typography>
              </Box>
            )}

            <Button
              variant="contained"
              fullWidth
              onClick={handleUpload}
              disabled={uploading}
              sx={{
                mt: 3, py: 1.4, borderRadius: "10px",
                background: "#059669", fontWeight: 600, fontSize: "15px",
                textTransform: "none", boxShadow: "none",
                "&:hover": { background: "#047857", boxShadow: "none" },
                "&.Mui-disabled": { background: "#a7f3d0", color: "#fff" },
              }}
            >
              {uploading
                ? <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CircularProgress size={16} thickness={5} sx={{ color: "#fff" }} />
                    Uploading...
                  </Box>
                : "Upload & Generate Itinerary →"
              }
            </Button>

          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Upload;