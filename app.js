const express = require('express');
const app = express();
const path = require('path');
const publicFolder = path.resolve(__dirname, './public');
app.use(express.static(publicFolder));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Funcionando en el puerto 3000');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});