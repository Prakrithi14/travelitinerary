# ✈️ Travel Itinerary AI

An AI-powered MERN Stack web application that allows users to upload travel booking documents and automatically generates a structured travel itinerary using the Gemini AI API.

---

## 🚀 Features

- JWT Authentication (Register/Login)
- Upload travel booking documents (PDF/Image)
- Extract text from uploaded documents
- Generate AI-powered travel itineraries using Gemini AI
- Store itineraries in MongoDB
- View previously generated itinerary history
- Share itineraries using a unique share link
- Responsive UI built with React and Material UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Material UI
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- pdf-parse
- Gemini AI API

---


## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Prakrithi14/travelitinerary.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URL=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user/register` | Register User |
| POST | `/user/login` | Login User |

### Travel

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/travel/upload` | Upload document & generate itinerary |
| GET | `/travel/history` | Get user itinerary history |
| GET | `/travel/share/:shareId` | View shared itinerary |

---



## 🌟 Future Enhancements

- OCR support for image documents
- AWS S3 integration
- Drag & Drop Upload
- PDF Download
- Email itinerary sharing
- Multi-language itinerary generation

---
