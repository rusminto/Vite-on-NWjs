const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, './')));
app.use((req, res, next) => {
	res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8888);
