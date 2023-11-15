const express = require('express')
const app = express()
const port = 3031
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('catalogo');
})

app.listen(port, () => {
    console.log(`Escucha al port  ${port}`)
})