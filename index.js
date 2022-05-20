const express = require('express');
const { getPackedSettings } = require('http2');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'))
app.set('view engine', 'ejs')

const {data} = require('./data')
const mainData = data.data.aid

app.get('/', (req, res) => {
    res.render('landing')
})



app.get('/getInfo', (req, res) => {
    res.render('form')
})

app.get('/resources', (req, res) => {
    res.render('resources')
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/student', (req, res) => {
    const {gpa, major, needBased} = req.query

    let user = {
        gpa: gpa,
        major: major,
        needBased: Boolean(needBased),
        studentType: studentType
    }
    console.log("I am user data", user)

    let results = []

    mainData.forEach(el => {

        if(el.needBased == user.needBased && 
            el.major.includes(user.major)){
            results.push(el)
        }


    })

    console.log("I am the results you are getting", results)

    res.render('results', {results})
})





app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})