require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes Placeholder
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Darltech Academy API" });
});

// Auth Routes
const authRoutes = require('./src/routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
