// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint with path and query params
app.get('/user/:id', (req, res) => {
    const pathParam = req.params.id;
    const queryParam = req.query.info;
  
    res.json({
        message: 'Received path and query params',
        pathParam,
        queryParam
    });
});

app.post('/data', (req, res) => {
    const inputData = req.body;

    const dataArray = Array.isArray(inputData)
        ? inputData
        : [inputData]; // wrap in array if it's not already

    res.json({
        message: 'Data received successfully',
        data: dataArray
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
