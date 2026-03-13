const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

let distPath = path.join(__dirname, 'dist', 'CRUD', 'browser');

if (!fs.existsSync(distPath)) {
    distPath = path.join(__dirname, 'dist', 'CRUD');
}

console.log('Sirviendo archivos desde:', distPath);

app.use(express.static(distPath));

app.get('/*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('App ejecutándose en puerto: ' + port);
});