var path = require('path')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});

let projectData = {};

const app = express()

app.use(express.static('dist'))
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

API_ID = '66d8dfdd'
API_KEY = 'bd4375a2f7c9e97e93f772922bab7084'

var textapi = new aylien({
    application_id: API_ID,
    application_key: API_KEY
    });

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.post('/test', function (req, res) {
    console.log(req.body)
    return textapi.sentiment({
        url: req.body.url
      }, function(error, response) {
        if(error){
            console.log(error);
            // throw new Error(error);
            return
        }
            projectData['polarity'] = response.polarity;
            projectData['subjectivity'] = response.subjectivity;
            projectData['polarity_confidence'] = response.polarity_confidence;
            projectData['subjectivity_confidence'] = response.subjectivity_confidence;
            console.log(projectData)
            res.send(projectData);
            }); 
    });
