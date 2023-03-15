const express = require('express');
const app = express();
const port = 8080;

app.get('/login', (req, res) => {
    res.cookie('name', 'some_value');
    res.send(`Hello ${res.cookie.name}`);
})


app.listen(port, () => console.log(`Express server listening at http://localhost:${port}`));