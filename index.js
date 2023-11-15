console.log("Mi primer proyecto Node")

const express = require('express')
const app = express()
const port = 3030

app.use(express.static('/assets'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('catalogo');
})

app.listen(port, () => {
    console.log(`Escucha al port  ${port}`)
})