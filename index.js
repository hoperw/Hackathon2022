const express = require('express');
const { getPackedSettings } = require('http2');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'))
app.set('view engine', 'ejs')

const {data} = require('./data')
const {resources} = require('./resources')

const mainData = data.data.aid
const mainResources = resources.resources.resources
console.log(mainResources)

app.get('/', (req, res) => {
    res.render('landing')
})


app.get('/getInfo', (req, res) => {
    res.render('form')
})

app.get('/resources', (req, res) => {

    res.render('resources', {mainResources})

})


app.get('/student', (req, res) => {
    const {gpa, major, needBased, studentType} = req.query

    let user = {
        gpa: gpa,
        major: major,
        needBased: Boolean(needBased),
        studentType: studentType
    }

    let results = []

    if (gpa < 5 && gpa >= 0) {

        mainData.forEach(el => {

            if(el.needBased == user.needBased && 
                (el.major.includes(user.major) || el.major.length == 0) &&
                el.minGPA >= user.gpa && 
                (el.studentType.includes(user.studentType) || el.studentType.length == 0)) {

                results.push(el)
            }
        })
    }

    res.render('results', {results})
})


app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})