const express = require('express');
const app = express();

app.get('/status', ((req, res) => {
    res.json({status: 'ok'});
}));

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is listening on" , PORT);
});