const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use([express.json(), cors()]);
app.use([routes]);

app.listen(8080, () => {
    console.log('Server running');
})