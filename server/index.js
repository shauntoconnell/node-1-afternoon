const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../public/build'));

const mc = require('./controllers/messages_controller');

const url = '/api/messages';
app.get(url, mc.read);
app.post(url, mc.create);
app.put(`${url}/:id`, mc.update);
app.delete(`${url}/:id`, mc.delete);

const port = 3001;
app.listen(port, console.log(`Server listening on port ${port}...`));

