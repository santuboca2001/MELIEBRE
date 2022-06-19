const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

server.listen(port,()=> console.log('Abriendo el servidor http://localhost:2000'));  

let port= process.env.PORT || 2000;

const public = path.resolve(__dirname, './public');
        



app.use(express.static('public'));


app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')))  

app.get('/register', (_req, res) => res.sendFile(path.resolve(__dirname, './views/register.html')))

app.get('/login', (_req, res) => res.sendFile(path.resolve(__dirname,'./views/login.html')))






