# Tinder Clone Backend

A Node.js/Express backend for the Tinder clone application with MongoDB integration.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory with your MongoDB connection string:

```bash
MONGODB_URI=your_mongodb_connection_string_here
FRONTEND_URL=http://localhost:3000
```

3. Start the server:

```bash
npm start
```

The server will run on `http://localhost:8001`

## API Endpoints

- `GET /` - Health check
- `GET /tinder/cards` - Get all cards
- `POST /tinder/cards` - Add a new card

## Environment Variables

- `MONGODB_URI` - Your MongoDB connection string (required)
- `FRONTEND_URL` - Frontend URL for CORS (defaults to http://localhost:3000)
- `PORT` - Server port (defaults to 8001)

## Security

This repository uses environment variables for sensitive information like database credentials. Never commit your `.env` file to version control.
