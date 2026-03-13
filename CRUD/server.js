const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/CRUD')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/CRUD/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Aplicación corriendo en el puerto ${port}`);
});