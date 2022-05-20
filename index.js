const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'))
app.set('view engine', 'ejs')

const {data} = require('./data')
console.log(data.data.aid)

app.get('/', (req, res) => {
    res.render('landing')
})

app.get('/student', (req, res) => {
    console.log(req.query)
    res.render('landing')
})





app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})