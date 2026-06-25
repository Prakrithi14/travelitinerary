import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:5000/travel/history",
        { headers: { Authorization: token } }
      );
      setHistory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShare = (shareId) => {
    const link = `http://localhost:5173/share/${shareId}`;
    navigator.clipboard.writeText(link);
    alert("Share link copied!");
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#f0fdf4" }}>

  
      <Box
        sx={{
          background: "linear-gradient(120deg, #059669 0%, #10b981 60%, #34d399 100%)",
          px: 4, py: 2,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 2px 12px rgba(5,150,105,0.15)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box sx={{ width: 36, height: 36, borderRadius: "10px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
            
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

      <Container maxWidth="md" sx={{ py: 5 }}>

        {/* Page Header */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "20px", overflow: "hidden",
            border: "1px solid #d1fae5",
            boxShadow: "0 8px 40px rgba(16,185,129,0.10)",
            mb: 4,
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(120deg, #059669 0%, #10b981 60%, #34d399 100%)",
              px: 4, py: 3.5, position: "relative", overflow: "hidden",
            }}
          >
            <Box sx={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
            <Box sx={{ position: "absolute", bottom: -30, right: 60, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
            <Box sx={{ position: "absolute", top: 20, right: 28, fontSize: 40, opacity: 0.25 }}>🗂️</Box>
            <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              My Trips
            </Typography>
            <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "22px", mt: 0.5 }}>
              Travel History
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "13.5px", mt: 0.5 }}>
              All your previously generated itineraries
            </Typography>
          </Box>

          <Box sx={{ px: 4, py: 2, background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981" }} />
              <Typography sx={{ fontSize: "13px", color: "#6b7280" }}>
                <strong style={{ color: "#065f46" }}>{history.length}</strong> itinerar{history.length === 1 ? "y" : "ies"} found
              </Typography>
            </Box>
            <Button
              onClick={() => navigate("/upload")}
              sx={{ textTransform: "none", fontSize: "13px", color: "#059669", fontWeight: 600, "&:hover": { background: "#f0fdf4" }, borderRadius: "8px" }}
            >
              + New Upload
            </Button>
          </Box>
        </Paper>

       
        {history.length === 0 && (
          <Paper
            elevation={0}
            sx={{
              borderRadius: "16px", border: "1px solid #d1fae5",
              background: "#fff", p: 6,
              textAlign: "center",
              boxShadow: "0 2px 12px rgba(16,185,129,0.06)",
            }}
          >
            <Typography sx={{ fontSize: 48, mb: 2 }}>🗺️</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#065f46", mb: 0.5 }}>
              No itineraries yet
            </Typography>
            <Typography sx={{ fontSize: "13.5px", color: "#6b7280", mb: 3 }}>
              Upload a travel document to generate your first itinerary
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/upload")}
              sx={{
                borderRadius: "10px", background: "#059669",
                textTransform: "none", fontWeight: 600,
                boxShadow: "none",
                "&:hover": { background: "#047857", boxShadow: "none" },
              }}
            >
              + Upload Document
            </Button>
          </Paper>
        )}

        
        {history.map((item, index) => (
          <Paper
            key={item._id}
            elevation={0}
            sx={{
              borderRadius: "16px",
              border: "1px solid #d1fae5",
              background: "#fff",
              overflow: "hidden",
              mb: 2.5,
              boxShadow: "0 2px 12px rgba(16,185,129,0.06)",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: "0 6px 24px rgba(16,185,129,0.13)",
                transform: "translateY(-2px)",
              },
            }}
          >
           
            <Box
              sx={{
                height: 4,
                background: "linear-gradient(90deg, #059669, #34d399)",
              }}
            />

            <Box sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 1.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 40, height: 40, borderRadius: "11px",
                      background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                      border: "1px solid #d1fae5",
                      display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 18, flexShrink: 0,
                    }}
                  >
                    
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "15px", color: "#065f46" }}>
                      {item.fileName}
                    </Typography>
                    <Typography sx={{ fontSize: "11.5px", color: "#9ca3af" }}>
                      Trip #{index + 1}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    background: "#f0fdf4", border: "1px solid #d1fae5",
                    borderRadius: "20px", px: 1.5, py: 0.3,
                    fontSize: "11px", color: "#059669", fontWeight: 600,
                  }}
                >
                  ✅ Generated
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: "13.5px", color: "#6b7280", lineHeight: 1.7,
                  background: "#fafff9", border: "1px solid #ecfdf5",
                  borderRadius: "10px", p: 1.5, mb: 2,
                }}
              >
                {item.itinerary.substring(0, 250)}...
              </Typography>

              <Box sx={{ display: "flex", gap: 1.5 }}>
                <Button
                  variant="outlined"
                  onClick={() => handleShare(item.shareId)}
                  sx={{
                    borderRadius: "9px",
                    borderColor: "#d1fae5",
                    color: "#059669",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "13.5px",
                    "&:hover": { borderColor: "#059669", background: "#f0fdf4" },
                  }}
                >
                   Share
                </Button>
                <Button
                  variant="contained"
                  href={`/share/${item.shareId}`}
                  sx={{
                    borderRadius: "9px",
                    background: "#059669",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "13.5px",
                    boxShadow: "none",
                    "&:hover": { background: "#047857", boxShadow: "none" },
                  }}
                >
                  View Itinerary →
                </Button>
              </Box>
            </Box>
          </Paper>
        ))}

      </Container>
    </Box>
  );
}

export default History;