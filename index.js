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
        gpa: parseInt(gpa),
        major: major,
        needBased: Boolean(needBased),
        studentType: studentType == undefined ? "NA" : studentType
    }

    let results = []

    if (user.gpa < 5 && user.gpa >= 0 && user.needBased == true) {

        mainData.forEach(el => {

            if ((el.major.includes(user.major) || el.major.includes("NA")) &&
                el.minGPA >= user.gpa && 
                (el.studentType.includes(user.studentType) || el.studentType.includes("NA"))) {

                results.push(el)
            }
        })
    } else {
        mainData.forEach(el => {

            if (user.needBased == false && 
                (el.major.includes(user.major) || el.major.includes("NA")) &&
                el.minGPA >= user.gpa && 
                (el.studentType.includes(user.studentType) || el.studentType.includes("NA"))) {

                results.push(el)
            }
        })
    }

    console.log(user)

    res.render('results', {results})
})


app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})