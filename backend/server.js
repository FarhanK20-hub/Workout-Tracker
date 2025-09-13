require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

// Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`✅ Connected to DB & listening at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("❌ Failed to connect to MongoDB:", error.message);
        process.exit(1);
    });
