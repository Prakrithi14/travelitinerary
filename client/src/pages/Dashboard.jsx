import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", background: "#f0fdf4" }}>

      {/* Navbar */}
      <Box
        sx={{
          background: "linear-gradient(120deg, #059669 0%, #10b981 60%, #34d399 100%)",
          px: 4, py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 12px rgba(5,150,105,0.15)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 36, height: 36, borderRadius: "10px",
              background: "rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 18,
            }}
          >
            
          </Box>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "17px" }}>
            Travel Itinerary AI
          </Typography>
        </Box>
        <Button
          onClick={() => { localStorage.removeItem("token"); navigate("/"); }}
          sx={{
            color: "rgba(255,255,255,0.85)",
            textTransform: "none", fontWeight: 500, fontSize: "13.5px",
            "&:hover": { color: "#fff", background: "rgba(255,255,255,0.1)" },
            borderRadius: "8px", px: 2,
          }}
        >
          Logout
        </Button>
      </Box>

      <Container maxWidth="md" sx={{ py: 5 }}>

        <Paper
          elevation={0}
          sx={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #d1fae5",
            boxShadow: "0 8px 40px rgba(16,185,129,0.10)",
            mb: 4,
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(120deg, #059669 0%, #10b981 60%, #34d399 100%)",
              px: 4, py: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
           
            <Box sx={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
            <Box sx={{ position: "absolute", bottom: -30, right: 60, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  display: "inline-flex", alignItems: "center", gap: 0.8,
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "20px", px: 1.5, py: 0.4, mb: 1.5,
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
                <Typography sx={{ color: "#fff", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Dashboard
                </Typography>
              </Box>

              <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "24px", mb: 0.5 }}>
                Travel Itinerary Dashboard 
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", mb: 2.5 }}>
                Upload your booking documents and let AI plan your trip
              </Typography>

              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/upload")}
                  sx={{
                    py: 1.2, px: 3,
                    borderRadius: "10px",
                    background: "#fff",
                    color: "#059669",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { background: "#f0fdf4", boxShadow: "none" },
                  }}
                >
                  + Upload Document
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/history")}
                  sx={{
                    py: 1.2, px: 3,
                    borderRadius: "10px",
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                    "&:hover": { borderColor: "#fff", background: "rgba(255,255,255,0.1)" },
                  }}
                >
                  View History
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>

     
        <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", mb: 2 }}>
          How it works
        </Typography>

       
        <Grid container spacing={2}>
          {[
            { icon: "📄", title: "Upload Documents", desc: "Flight tickets, hotel bookings, travel passes and more", step: "01" },
            { icon: "🤖", title: "AI Extraction", desc: "Automatically extracts key info from your documents", step: "02" },
            { icon: "🗺️", title: "Smart Itinerary", desc: "Generates a structured day-by-day travel plan for you", step: "03" },
            { icon: "🔗", title: "Share & Save", desc: "Save your itineraries and share them with anyone", step: "04" },
          ].map((card, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: "16px",
                  border: "1px solid #d1fae5",
                  background: "#fff",
                  boxShadow: "0 2px 12px rgba(16,185,129,0.06)",
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  "&:hover": {
                    boxShadow: "0 6px 24px rgba(16,185,129,0.13)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box sx={{ position: "relative", flexShrink: 0 }}>
                  <Box
                    sx={{
                      width: 48, height: 48, borderRadius: "13px",
                      background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                      border: "1px solid #d1fae5",
                      display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 22,
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute", top: -6, right: -6,
                      width: 18, height: 18, borderRadius: "50%",
                      background: "#059669",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "9px", fontWeight: 800 }}>
                      {card.step}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "14px", color: "#065f46", mb: 0.4 }}>
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6 }}>
                    {card.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default Dashboard;