const express = require('express');
const cors = require('cors');
const metadataRoute = require('./routes/metadata');
const downloadRoute = require('./routes/download');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/metadata', metadataRoute);
app.use('/api/download', downloadRoute);

// Serve static files from the React frontend app
const path = require('path');
app.use(express.static(path.join(__dirname, '../dist')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
