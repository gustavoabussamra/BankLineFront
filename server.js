const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express(__dirname + '/dist/bank-line-front'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/bank-line-front/index.html')
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
})
