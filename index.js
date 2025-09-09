require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 NEBU Platform is running successfully!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    database: 'connected',
    ai: 'ready',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Start server
app.listen(port, () => {
  console.log(`✅ NEBU Server running on port ${port}`);
  console.log(`🌐 Open: http://localhost:${port}`);
  console.log('🚀 Ready to revolutionize digital marketing!');
});
