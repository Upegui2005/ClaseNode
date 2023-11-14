console.log("Mi primer proyecto Node")

const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.send('Holi');
})

app.listen(port, () => {
    console.log(`Escucha al port  ${port}`)
})