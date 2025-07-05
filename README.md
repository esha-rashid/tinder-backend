# Tinder Clone Backend API

A RESTful API built with Node.js, Express, and MongoDB for a Tinder-style dating application. This backend handles user profiles, card swiping mechanics, and provides a scalable foundation for real-time matching features.

## 🚀 Features

- **RESTful API Design** - Clean, intuitive endpoints following REST principles
- **MongoDB Integration** - Scalable NoSQL database for user profiles and match data
- **CORS Configuration** - Secure cross-origin requests for frontend integration
- **Environment Variables** - Secure configuration management
- **Error Handling** - Comprehensive error responses and logging
- **Scalable Architecture** - Modular design ready for feature expansion

## 🛠️ Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (ready for implementation)
- **Deployment:** Railway (containerized)
- **Environment:** dotenv for configuration

## 📋 API Endpoints

### Core Endpoints

```
GET    /                    - Health check
GET    /tinder/cards       - Retrieve all user profiles
POST   /tinder/cards       - Add new user profile
```

### Response Format

```json
{
  "name": "Sarah Wilson",
  "imgUrl": "https://example.com/sarah.jpg",
  "age": 28,
  "bio": "Adventure seeker and coffee enthusiast"
}
```

## 🏗️ Architecture Decisions

### Why MongoDB?

- **Flexible Schema:** User profiles can evolve without migrations
- **Scalability:** Horizontal scaling for growing user base
- **JSON-like Documents:** Natural fit for JavaScript/Node.js stack

### Why Express.js?

- **Minimal & Fast:** Lightweight framework with excellent performance
- **Middleware Ecosystem:** Rich ecosystem for authentication, validation, etc.
- **RESTful by Design:** Perfect for API-first architecture

### Security Considerations

- Environment variables for sensitive data
- CORS configuration for frontend security
- Input validation (ready for implementation)
- Rate limiting (ready for implementation)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/tinder-backend.git
   cd tinder-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:8001`

## 🔧 Development

### Project Structure

```
tinder-backend/
├── server.js          # Main application entry point
├── dbCards.js         # MongoDB schema and model
├── package.json       # Dependencies and scripts
├── .env              # Environment variables (not in git)
└── README.md         # This file
```

### Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run test suite (ready for implementation)
```

## 🌐 Deployment

### Railway Deployment

This backend is optimized for Railway deployment:

1. **Connect GitHub repository** to Railway
2. **Set environment variables** in Railway dashboard
3. **Automatic deployment** on git push

### Environment Variables

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tinder
FRONTEND_URL=https://your-frontend.vercel.app
PORT=8001
```

## 🔮 Future Enhancements

### Planned Features

- [ ] User authentication with JWT
- [ ] Real-time matching with WebSockets
- [ ] Image upload and storage
- [ ] Geolocation-based matching
- [ ] Chat functionality
- [ ] Push notifications

### Performance Optimizations

- [ ] Database indexing for faster queries
- [ ] Redis caching for frequently accessed data
- [ ] CDN integration for static assets
- [ ] Load balancing for horizontal scaling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Note:** This is a learning project demonstrating modern web development practices. Not intended for production use without additional security and scalability considerations.
