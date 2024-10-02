const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const viewRoutes = require('./routes/viewRoutes');
const courseRoutes = require('./routes/courseRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const episodeRoutes = require('./routes/episodeRoutes');

app.use('/users', userRoutes);
app.use('/views', viewRoutes);
app.use('/courses', courseRoutes);
app.use('/modules', moduleRoutes);
app.use('/episodes', episodeRoutes);

app.use("/health-check", (req, res) => {
    res.status(200).json({ message: "Server is healthy" });
});


module.exports = app;
