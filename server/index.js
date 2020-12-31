const express = require('express')
const messagesController = require('./controllers/messagesController')
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

const messagesUrl = '/api/messages';
app.post(messagesUrl, messagesController.create);
app.get(messagesUrl, messagesController.read);
app.put(`${messagesUrl}/:id`, messagesController.update);
app.delete(`${messagesUrl}/:id`, messagesController.delete);


const port = 3001
app.listen(port, ()=> {console.log(`PORT ${port}: ACTIVE`)});