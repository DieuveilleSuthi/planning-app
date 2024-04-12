
const express = require('express');
const planningRoutes = require('./routes/planningRoutes/planningRoutes');

const app = express();

//body parser
app.use(express.json({limit: '10kb'}));

//Routes
app.use('/api/v1/planning', planningRoutes);

module.exports = app;