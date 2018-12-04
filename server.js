const express = require('express');
const axios = require('axios');
const { API_SECRET_KEY } = require('./config');
const app = express();
const port = 8080;

app.use(express.json());
app.use('/', express.static('public'));

app.use('/proxy', (req, res) => {
    const url = req.url.substring(1).replace('API_SECRET_KEY', API_SECRET_KEY);
    const { method } = req;
    axios[method.toLowerCase()](url).then(result => res.status(result.status).json(result.data));
    
});

app.listen(port, () => console.log(`up and running on localhost:${port}`))